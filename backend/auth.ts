import { Request, Response } from 'express'
import{ users,User} from './users'

//biblioteca token jwt
import * as jwt from   'jsonwebtoken'
//codigo que processa o post para o login
export const handleAuthentication = (req: Request, resp: Response) => {
   //constante que pega a informação vindo no corpo da url
    const user:User = req.body
    if (isValid(user)) {
        const dbUser:User = users[user.email]
        /**
         * Pegando o token e gerando informações
         * @param sub portador do token
         * @param iss quem que emite o token
         */
        const token = jwt.sign({
            sub: dbUser.email,
            iss: 'meat-api'
            
        },'meat-api-password')

        resp.json({name: dbUser.name,
        email: dbUser.email,acessToken:token})

    } else {
        resp.status(403).json({ message: 'Dados inválidos!' })
    }
}

//função de validação
function isValid(user:User):boolean{

    if(!user){
        return false
    }
    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
}