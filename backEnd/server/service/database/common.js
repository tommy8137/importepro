const { throwApiError, errorCode } = require('../../helpers/errorCode/apiErrorHelper.js')
const parameterStringReplacement = require('../../utils/database/parameterStringReplace')
const commonModel = require('../../model/database/common.js').Common
const _ = require('lodash')
const moment = require('moment')
const tsystemDB = require('../../helpers/database/tPostgres.js')
const log4js = require('../../utils/logger/logger')
const logger = log4js.getLogger('database Common Parameter Service')

const resetProductTypeId = (formulaType, productTypeId) => {
  let formulaTypeList = ['housing_metal', 'housing_plastic', 'cable_ffc']
  if (!_.includes(formulaTypeList, formulaType)) {
    // 如果不是上述的formula type時, productTypeId 皆為 1(NB)
    return 1
  }
  return productTypeId
}

class common {
  static async scheduleNewByFormulaType(client, formulaType, nextDate, productTypeId) {
    try {
      productTypeId = resetProductTypeId(formulaType, productTypeId)
      let today = moment().format('YYYY-MM-DD')

      let count = await commonModel.getCountByformulaType(formulaType, productTypeId)
      let copyDateId, copyDate, activateDate

      if(count.length > 0) {
        copyDateId = count[0].id
        copyDate = new Date(count[0].activate_date)
      } else {
        return
      }
      if(nextDate == copyDate) {
        return
      }
      let isActiveDateExist = await commonModel.isActiveDateExist(formulaType, nextDate, productTypeId)
      let largeAcTivateDate = moment(copyDate).format('YYYY-MM-DD')
      if(isActiveDateExist.length > 0) { // 要insert 的 activate_date 存在
        return
      }
      if(count.length == 1) {
        activateDate = await commonModel.insertActivateDate(client, formulaType, nextDate, productTypeId)
        await commonModel.copyParameterByFormulaType(client, activateDate, copyDateId)
      } else {

        if(today >= largeAcTivateDate) { // 今天大於最大的 activate date, 則兩筆為 last & current
          console.log('沒有next 所以 要新增一筆日期, 複製所有的資料, productTypeId: ', productTypeId)
          activateDate = await commonModel.insertActivateDate(client, formulaType, nextDate, productTypeId)
          await commonModel.copyParameterByFormulaType(client, activateDate, copyDateId)
        } else { // 今天小於最大的 activate date, 則兩筆為 current & next
          console.log('更新 schedule_date 的 next 日期', formulaType, nextDate, copyDateId)
          await commonModel.updateDateByCopyDate(client, nextDate, copyDateId)
        }
      }
    } catch(err) {
      logger.debug('scheduleNewByFormulaType function', err)
      throw err
    }

  }
  static async getNextDate(formulaType, productTypeId) {
    productTypeId = resetProductTypeId(formulaType, productTypeId)

    let nextDate = await commonModel.getNextDateByformulaType(formulaType, productTypeId)
    let today = moment().format('YYYY-MM-DD')
    let result = {
      nextId: null,
      nextDate: null,
    }
    if(nextDate.length > 0) {
      let largeAcTivateDate = new Date(nextDate[0].activate_date)
      largeAcTivateDate = moment(largeAcTivateDate).format('YYYY-MM-DD')
      if (nextDate.length == 2 || nextDate.length == 3) {
        if(today < largeAcTivateDate) {  // 今天小於最大生效日 => 最大生效日為next
          result = {
            nextId: nextDate[0].id,
            nextDate: nextDate[0].activate_date,
          }
        }
      }
    }
    return result
  }
  static async modifyCommonPrice(nextId, items) {
    // TODO 檢查是否為最新的 date
    try {
      let client = await new tsystemDB()
      let results = await commonModel.modifyPrice(client, nextId, items, 'id')
      await client.commit()
    } catch (err) {
      logger.debug('Update table fail, modifyCommonPrice function', err)
      throw err
    }
  }
  static async getParameters(params) {
    let { formulaType, productTypeId } = params
    try {
      let res = await commonModel.fetchParameterByType(formulaType, productTypeId)
      res = await Promise.all(res.map(async (item) =>{
        let replaceConfig = parameterStringReplacement.checkStringReplacement(item.label_name) // 建立替換config
        if (replaceConfig && replaceConfig.length) {
          replaceConfig = await parameterStringReplacement.getReplaceValue(replaceConfig, productTypeId) // 搜尋替換值
          item.label_name = parameterStringReplacement.applyReplacement(item.label_name, replaceConfig) // 替換
        }
        return item
      })).catch((err) => {
        throw err
      })
      res.sort((a, b) => a.label - b.label)
      return res
    } catch (err) {
      logger.error(`get parameters of formula:${formulaType} with error:${err}`)
      throwApiError('Internal error', errorCode.INTERNAL_ERROR)
    }
  }
}
module.exports = common
