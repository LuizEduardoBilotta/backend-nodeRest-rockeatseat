const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

//Utilizando a desestruturação para obter os valores nas variáveis.
const { host, port, user, pass } = require('../config/mail.json');


//Utilizando a feature do ES6, onde não precisamos no objeto escrever "host: host", podemos omitir o nome
//quando são iguais.
const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

transport.use('compile', hbs({
    viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./src/resources/mail')
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
}));

module.exports = transport;