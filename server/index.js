const express = require('express');
const path = require('path');


let app = express();


app.use('/static/', express.static(path.join(__dirname, '../dist')));
app.set('views', path.join(__dirname, '../index.html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
 
app.get('*', function(req, res) {

    res.render(path.join(__dirname, '../index.html'));

});

app.post('/create_page', function(req, res) {

    res.send({
        data: {},
        success: true
    });

});


app.listen('9090');