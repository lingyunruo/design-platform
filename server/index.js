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
    controller: 'server/controller'
});


server.router.get('/login', server.controller.router.login);

server.router.get('/', server.controller.router.index);

server.router.post('/api/login', server.controller.login.checkUser);