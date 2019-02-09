
const path = require('path');

module.exports = {
    login: async function() {
        await this.render(path.join(__dirname, '../../index.html'));
    },
    index: async function() {
        await this.render(path.join(__dirname, '../../index.html'));
    }
};