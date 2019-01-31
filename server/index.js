const path = require('path');
const PServer = require('../../p-server/src');

const server = new PServer({
    port: 9000,
    root: path.join(__dirname, '../'),
    templateExtensionName: ['.html'],
    mock: {
    },
    templateData: {
        '/index.html': {}
    },
    controller: ''
});