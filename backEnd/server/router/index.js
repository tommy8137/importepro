
const router = require('koa-router')
const adminRouter = require('./api/v1/admin.js')
const cleanSheetRouter = require('./api/v1/cleanSheet.js')
const xrayRouter = require('./api/v1/xray.js')
const spendingRouter = require('./api/v1/spending.js')
const costgenRouter = require('./api/v1/costgen.js')
const bomManager = require('./api/v1/bomManager.js')
const eeBomRouter = require('./api/v1/eeBom.js')
const utilsRouter = require('./api/v1/utils')

const monitor = require('./api/v1/monitor.js')
const settingRouter = require('./api/v1/setting.js')
const lppRouter = require('./api/v1/lpp.js')
const permissionRouter = require('./api/v1/permission.js')
const eproApplicationRouter = require('./api/v1/eproApplication.js')
const databaseRouter = require('./api/v1/database/index.js')
const testRouter = require('./api/v1/test.js')

const apiRouter = new router()

apiRouter.use('/admin', adminRouter.routes())
apiRouter.use('/cleanSheet', cleanSheetRouter.routes())
apiRouter.use('/xray', xrayRouter.routes())
apiRouter.use('/spending', spendingRouter.routes())
apiRouter.use('/costgen', costgenRouter.routes())
apiRouter.use('/bom', bomManager.routes())
apiRouter.use('/eeBom', eeBomRouter.routes())
apiRouter.use('/monitor', monitor.routes())
apiRouter.use('/setting', settingRouter.routes())
apiRouter.use('/utils', utilsRouter.routes())
apiRouter.use('/lpp', lppRouter.routes())
apiRouter.use('/permission', permissionRouter.routes())
apiRouter.use('/application', eproApplicationRouter.routes())
apiRouter.use('/database', databaseRouter.routes())
apiRouter.use('/test', testRouter.routes())

module.exports = apiRouter