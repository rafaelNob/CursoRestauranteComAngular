import { Restaurant } from "./restaurant/restaurante.model";
import { MEAT_API} from 'app/app.api'
import { Injectable } from "@angular/core";
/* import { Http } from "@angular/http"; import angular 4 */
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler} from 'app/app.error-handler'
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService{

    rests: Restaurant[]

    constructor(private http:HttpClient){}

    restaurants(search?: string):Observable <Restaurant[]>{
        let params: HttpParams = undefined
        if(search){
           params = new HttpParams() //se realmente o objeto for chamado 
           .set('q',search) // primeiro é o nome do parametro e segundo é oq te do html
        }
 
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`,{params:params})  
    }

    restaurantById(id:string):Observable<Restaurant>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .catch(ErrorHandler.handlerError)
    }

    reviewsOfrestaurants(id:string):Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .catch(ErrorHandler.handlerError)
    }

    menuOfrestaurants(id:string):Observable<MenuItem[]>{
        console.log('PEGANDO O ID DO MENU ' + id);
        
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .catch(ErrorHandler.handlerError)
    }

   /*  IMPLEMENTAÇÃO NO ANGULAR 4
    constructor(private http:Http){}

   restaurants(search?: string):Observable <Restaurant[]>{
        // parametro genérico (q) refina busca por nome, categoria e etc
 
        return this.http.get(`${MEAT_API}/restaurants`,{params:{q:search}})
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

    restaurantById(id:string):Observable<Restaurant>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError)
    }

    reviewsOfrestaurants(id:string):Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

    menuOfrestaurants(id:string):Observable<MenuItem[]>{
        console.log('PEGANDO O ID DO MENU ' + id);
        
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    } */
}