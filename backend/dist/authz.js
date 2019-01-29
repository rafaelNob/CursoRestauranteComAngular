"use strict";
exports.__esModule = true;
//biblioteca token jwt
var jwt = require("jsonwebtoken");
var api_config_1 = require("./api-config");
exports.handleAuthorization = function (req, resp, next) {
    //função para extrair o token
    var token = extractToken(req);
    if (!token) {
        /**
         * quado formado o status 401 tem q passar o Header
         * resp.setHeader = envia o header
         * Bearer = espera que seja o portador de um token e  token_type qual tipo
         */
        resp.setHeader('www-Autenticate', 'Bearer token_type="JWT"'); //sempre esta assinatura
        resp.status(401).json({ message: 'Você precisa se autenticar.' });
    }
    else {
        /**
         * Checando a validado do Token
         * @param token verifica o token
         * segundo parametro meat-api-password verifica o password
         */
        jwt.verify(token, api_config_1.apiConfig.secret, function (error, decoded) {
            //se o  token foi codificado a informação estará presente
            if (decoded) {
                // avisa ao express que esta tudo certo
                next();
            }
            else {
                //esta proibia a acessar o recurso
                resp.status(403).json({ message: 'Não autorizado' });
            }
        });
    }
    function extractToken(req) {
        var token = undefined;
        //obtedo o token do requests
        //ele vem dos headers
        if (req.headers && req.headers.authorization) {
            //authorization: Bearer zzz.zzz.zzz
            //aqui faz um split do espaço em branco
            var parts = req.headers.authorization.split(' ');
            if (parts.length === 2 && parts[0] === 'Bearer') {
                token = parts[1];
            }
        }
        return token; //token de acesso
    }
};
