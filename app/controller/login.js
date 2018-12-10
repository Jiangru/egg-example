const Controller = require('egg').Controller

class NewLoginController extends Controller {
  async login () {
    console.log(this.ctx.query.name)
    const createRule = {
      username: {
        type: 'email'
      },
      password: {
        type: 'password',
        compare: 're-password'
      }
    }

    this.ctx.validate(createRule)
    this.ctx.body = ctx.request.body
  }
}

module.exports = NewLoginController
// const createRule = {
//   username: {
//     type: 'email'
//   },
//   password: {
//     type: 'password',
//     compare: 're-password'
//   }
// }
// console.log(111)

// exports.create = async ctx => {
//   ctx.validate(createRule)
//   ctx.body = ctx.request.body
// }