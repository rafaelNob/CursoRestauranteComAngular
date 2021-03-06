export class User{
    constructor(public email:string,
                public name: string,
                private password:string
        ){}

        matches(another:User):boolean{
            console.log("Pegado o User " + another);
            
           return another !== undefined && another.email === this.email && another.password === this.password     
        }
}

export const users:{[key:string]:User} ={
    "juliana@gmail.com": new User('juliana@gmail.com','Juliana','juliana23'),
    "amanda@gmail.com": new User('amanda@gmail.com','amanda','amanda21'),
    "rafa@rafa": new User('rafa@rafa','rafa','123'),
    
}