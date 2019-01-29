import { CanLoad, Route } from "@angular/router";
import { Injectable } from "@angular/core";



@Injectable()
export class LoggedInGuard implements CanLoad{
/**
 * 
 * canLoad é associado com as rotas que contem os loadsChildrens
 * para se aquele modulo que queremos carregar...tem permissão
 */  
canLoad(router:Route):boolean{
    console.log("PEGANDO A ROTA "+router)
    
return false
}

}