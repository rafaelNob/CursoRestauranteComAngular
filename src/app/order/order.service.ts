import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.serv";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
/* import { Http, RequestOptions,Headers } from "@angular/http"; */
import{ HttpClient, HttpHeaders} from '@angular/common/http'
import { MEAT_API } from "app/app.api";
import { LoginService } from "app/security/login/login.service";


@Injectable()
export class OrderService{
    constructor(private shopCartServ:ShoppingCartService,
                private http:HttpClient,
                private logSrv:LoginService
                ){}

    cartItems():CartItem[]{
        return this.shopCartServ.items
    }

    increasyQty(item: CartItem){
        return this.shopCartServ.increasyQty(item)
    }

    decreasyQty(item: CartItem){
        return this.shopCartServ.decreasyQty(item)
    }

    remove(item:CartItem){
        return this.shopCartServ.removeItem(item)
    }

    itemsValue(){
        return this.shopCartServ.total()
    }
    checkOrder(order:Order):Observable<string>{
        //carrega o acessToken que recebe do login
       let headers = new HttpHeaders()
        
       //se o usuario estiver logado
       if(this.logSrv.isLoggedIn()){
        //passa a autorização no header
        console.log(`PEGANDO ACESS TOKEN ${this.logSrv.user.acessToken}` );
        
        headers = headers.set('Authorization',`Bearer ${this.logSrv.user.acessToken}`)
       }

        return this.http.post<Order>(`${MEAT_API}/orders`,order,{headers:headers})
        .map(order => order.id)
    }

   /* 
   MÉTODO ANTIGO 

   checkOrder(order:Order):Observable<string>{
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(order => order.id)
    } */
    clear(){
        this.shopCartServ.clear()
    }
}