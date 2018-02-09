const logninRouter = require('./lognin')
module.exports = function (app) {
  app.use('/',logninRouter)
}
