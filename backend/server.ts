import * as jsonServer from 'json-server' //modulo que ele esta importando
import {Express} from 'express' 

import * as fs from 'fs' //capaz de ler arquivos do disco
import * as https from 'https' 


//importação da autenticação do usuario
import {handleAuthentication} from './auth'

const server:Express = jsonServer.create() //faz uma tipagem de Expressa para poder trazer metodos e tratamentos de erros
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

//configurando rota de login
server.post('/login', (handleAuthentication))

// Use default router
server.use(router)

//obtendo referencia ao certificado e a chave
const options ={
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options,server) 
.listen(3002, () => {
  console.log('JSON Server is running on https://localhost:3001') //criando o servidor
})

//node backend/dist/server