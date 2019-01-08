import { Restaurant } from "./restaurant/restaurante.model";
import { MEAT_API} from 'app/app.api'
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler} from 'app/app.error-handler'

@Injectable()
export class RestaurantService{

    rests: Restaurant[]

    constructor(private http:Http){}

    restaurants():Observable <Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
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
}