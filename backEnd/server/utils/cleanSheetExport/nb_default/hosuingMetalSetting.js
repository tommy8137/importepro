const hosuingMetalTemplate = require('../template/hosuingMetalTemplate')
const quotationSetting = require('../../cleanSheetQuotation/nb/housing-metal')

module.exports = {
  cleansheet: [
    hosuingMetalTemplate.cleansheet.material_cost,
    hosuingMetalTemplate.cleansheet.stamping_cost,
    hosuingMetalTemplate.cleansheet.stamping_single_cost,
    hosuingMetalTemplate.cleansheet.secondary_processing_cost,
    hosuingMetalTemplate.cleansheet.cmfProcessListUltrasonicClean,
    hosuingMetalTemplate.cleansheet.cmfProcessListFirstAnode,
    hosuingMetalTemplate.cleansheet.cmfProcessListSecondAnode,
    hosuingMetalTemplate.cleansheet.cmfProcessListSandBlast,
    hosuingMetalTemplate.cleansheet.cmfProcessListHairLine,
    hosuingMetalTemplate.cleansheet.cmfProcessListPatinting,
    hosuingMetalTemplate.cleansheet.cmfProcessListThermalBonding,
    hosuingMetalTemplate.cleansheet.cmfProcessListSingleTapping,
    hosuingMetalTemplate.cleansheet.cmfProcessListMultiTapping,
    hosuingMetalTemplate.cleansheet.cmfProcessListSingleSpotWelding,
    hosuingMetalTemplate.cleansheet.cmfProcessListMultiSpotWelding,
    // hosuingMetalTemplate.cleansheet.cmfProcessListSingleRivet,
    // hosuingMetalTemplate.cleansheet.cmfProcessListMultiRivet,
    // hosuingMetalTemplate.cleansheet.cmfProcessListRivet,
    hosuingMetalTemplate.cleansheet.cmfProcessListHandMakeDraw,
    hosuingMetalTemplate.cleansheet.cmfProcessListScreenPrinting,
    hosuingMetalTemplate.cleansheet.cmfProcessListPadPrinting,
    hosuingMetalTemplate.cleansheet.cmfProcessListSilkPrint,
    hosuingMetalTemplate.cleansheet.cmfProcessListCNC,
    hosuingMetalTemplate.cleansheet.cmfProcessListCNCPL,
    hosuingMetalTemplate.cleansheet.cmfProcessListDrillCutPowerButton,
    hosuingMetalTemplate.cleansheet.cmfProcessListDrillCutTP,
    hosuingMetalTemplate.cleansheet.cmfProcessListDrillCutFingerprintHole,
    hosuingMetalTemplate.cleansheet.cmfProcessListDrillCutPowerHole,
    hosuingMetalTemplate.cleansheet.cmfProcessListDrillCutFourSides,
    hosuingMetalTemplate.cleansheet.cmfProcessListLaserPrint,
    hosuingMetalTemplate.cleansheet.cmfProcessListLaserPrintIcon,
    hosuingMetalTemplate.cleansheet.cmfProcessListPolishingAuto,
    hosuingMetalTemplate.cleansheet.cmfProcessListPolishingArtificial,
    hosuingMetalTemplate.cleansheet.cmfProcessListDrilling,
    hosuingMetalTemplate.cleansheet.cmfProcessListAnodizingRemoval,
    // hosuingMetalTemplate.cleansheet.painting_cost,
    hosuingMetalTemplate.cleansheet.profit,
    hosuingMetalTemplate.cleansheet.totalPrices,
  ],
  partlist: [
    hosuingMetalTemplate.partlist.hmmaterial,
    hosuingMetalTemplate.partlist.materialRemark,
    hosuingMetalTemplate.partlist.hmthickness,
    hosuingMetalTemplate.partlist.hmpartssizelength,
    hosuingMetalTemplate.partlist.hmpartssizewidth,
    hosuingMetalTemplate.partlist.hmpartssizehigh,
    hosuingMetalTemplate.partlist.hmpartsexpandlength,
    hosuingMetalTemplate.partlist.hmpartsexpandwidth,
    hosuingMetalTemplate.partlist.hmToolingMaterialExpandLength,
    hosuingMetalTemplate.partlist.hmToolingMaterialExpandWidth,
    hosuingMetalTemplate.partlist.hmToolingMaterialWeight,
    hosuingMetalTemplate.partlist.stamping_single_layout,
    hosuingMetalTemplate.partlist.hmToolingTotalCount,
    hosuingMetalTemplate.partlist.hmToolingRemark,
    hosuingMetalTemplate.partlist.empty,
    // hosuingMetalTemplate.partlist.cmfPPainting,
    hosuingMetalTemplate.partlist.cmfProcessListultrasonicCleanExist,
    hosuingMetalTemplate.partlist.cmfProcessListAnode,
    hosuingMetalTemplate.partlist.cmfProcessListSandBlast,
    hosuingMetalTemplate.partlist.cmfProcessListHairLine,
    hosuingMetalTemplate.partlist.cmfProcessListPainting,
    hosuingMetalTemplate.partlist.cmfProcessListThermalBonding,
    hosuingMetalTemplate.partlist.cmfProcessListSingleTapping,
    hosuingMetalTemplate.partlist.cmfProcessListMultiTapping,
    hosuingMetalTemplate.partlist.cmfProcessListSingleSpotWelding,
    hosuingMetalTemplate.partlist.cmfProcessListMultiSpotWelding,
    // hosuingMetalTemplate.partlist.cmfProcessListSingleRivet,
    // hosuingMetalTemplate.partlist.cmfProcessListMultiRivet,
    // hosuingMetalTemplate.partlist.cmfProcessListRivet,
    hosuingMetalTemplate.partlist.cmfProcessListHandMakeDraw,
    hosuingMetalTemplate.partlist.cmfProcessListScreenPrinting,
    hosuingMetalTemplate.partlist.cmfProcessListPadPrinting,
    hosuingMetalTemplate.partlist.cmfProcessListSilkPrint,
    hosuingMetalTemplate.partlist.cmfProcessListCNC,
    hosuingMetalTemplate.partlist.cmfProcessListCNCPL,
    hosuingMetalTemplate.partlist.cmfProcessListDrillCutNB,
    hosuingMetalTemplate.partlist.cmfProcessListLaserPrint,
    hosuingMetalTemplate.partlist.cmfProcessListLaserPrintIcon,
    hosuingMetalTemplate.partlist.cmfProcessListPolishing,
    hosuingMetalTemplate.partlist.cmfProcessListDrilling,
    hosuingMetalTemplate.partlist.cmfProcessListAnodizingRemoval,
  ],
  quotation: quotationSetting,
}

