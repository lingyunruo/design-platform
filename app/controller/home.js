const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        await this.ctx.render('homepage/index.tpl');
    }

    async delItem() {
        const {body} = this.ctx.request;

        await this.service.home.delItem(body.key);

        this.ctx.body = {
            success: true
        };
    }

    async saveData() {
        const {body} = this.ctx.request;

        await this.service.home.saveObj(body);

        this.ctx.body = {
            success: true
        }
    }

    async getDataMap() {
        const res = await this.service.home.getAll();

        this.ctx.body = {
            data: res,
            success: true
        };
    }
}


module.exports = HomeController