exports.keys = 'lingyun';

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};

exports.security = {
    csrf: false
}

exports.development = {
    reloadPattern: ['**', '!**/persistent/**/*.json']
}

exports.cluster = {
    listen: {
        port: 8080,
        hostname: '127.0.0.1'
    }
}