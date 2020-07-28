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