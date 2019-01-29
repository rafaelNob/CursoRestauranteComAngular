"use strict";
exports.__esModule = true;
var jsonServer = require("json-server"); //modulo que ele esta importando
var fs = require("fs"); //capaz de ler arquivos do disco
var https = require("https");
//importação da autenticação do usuario
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create(); //faz uma tipagem de Expressa para poder trazer metodos e tratamentos de erros
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
//configurando rota de login
server.post('/login', (auth_1.handleAuthentication));
//configuração do token usando o Use para servir para todos os protocolos get post etc
server.use('/orders', authz_1.handleAuthorization);
// Use default router
server.use(router);
//obtendo referencia ao certificado e a chave
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
https.createServer(options, server)
    .listen(3001, function () {
    console.log('JSON Server is running on https://localhost:3001'); //criando o servidor
});
//node backend/dist/server
