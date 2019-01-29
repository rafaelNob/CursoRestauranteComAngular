"use strict";
exports.__esModule = true;
var users_1 = require("./users");
var api_config_1 = require("./api-config");
//biblioteca token jwt
var jwt = require("jsonwebtoken");
//codigo que processa o post para o login
exports.handleAuthentication = function (req, resp) {
    //constante que pega a informação vindo no corpo da url
    var user = req.body;
    if (isValid(user)) {
        var dbUser = users_1.users[user.email];
        /**
         * Pegando o token e gerando informações
         * @param sub portador do token
         * @param iss quem que emite o token
         */
        var token = jwt.sign({
            sub: dbUser.email,
            iss: 'meat-api'
        }, api_config_1.apiConfig.secret);
        resp.json({ name: dbUser.name,
            email: dbUser.email, acessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos!' });
    }
};
//função de validação
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = users_1.users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
