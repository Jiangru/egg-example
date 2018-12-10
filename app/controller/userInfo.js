const Controller = require('egg').Controller

class NewUserinfoController extends Controller {
  async index () {
    const dataList = await this.other();
    // http://127.0.0.1:7001/users?name="蒋如意"
    const name = this.ctx.query.name
    this.ctx.body = {
      code: 0,
      message: 'success',
      data: name ? name : dataList
    }
  }
  async other () {
    return {
      list: [
        {id: 1, name: 'this is one'},
        {id: 2, name: 'this is two'}
      ]
    }
  }
  async showName () {
    const name = this.ctx.query.name
    this.ctx.body = {
      code: 0,
      message: 'success',
      data: {
        name: name
      }
    }
  }
}

module.exports = NewUserinfoController