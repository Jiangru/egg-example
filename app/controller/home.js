const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index () {
    this.ctx.body = 'Hello World';
  }
  async page () {
    // 判断运行环境
    console.log(this.app.config.env)
    this.ctx.body = '<div style="color: red">你好！</div>'
  }
}

module.exports = HomeController