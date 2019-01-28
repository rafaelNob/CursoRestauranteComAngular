import { Request, Response } from 'express'
import{ users,User} from './users'

//codigo que processa o post para o login
export const handleAuthentication = (req: Request, resp: Response) => {
    const user:User = req.body
    if (isValid(user)) {
        const dbUser:User = users[user.email]
        resp.json({name: dbUser.name,
        email: dbUser.email})

    } else {
        resp.status(403).json({ message: 'Dados inválidos!' })
    }
}

function isValid(user:User):boolean{

    if(!user){
        return false
    }
    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
}