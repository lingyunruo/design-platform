const path = require('path');
const Service = require('egg').Service;
const BaseJson = require('ll-data');

const data = new BaseJson({
    jsonFile: 'mapData.json',
    basePath: path.join(__dirname, './data')
});

class HomeService extends Service {
    async getAll() {
        const res = await data.get();

        return res;
    }

    async saveObj(obj) {
        await data.set(obj);
    }

    async delItem(key) {
        await data.delete(key);
    }
}


module.exports = HomeService;