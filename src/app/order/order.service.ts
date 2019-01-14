import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.serv";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import { Http, RequestOptions,Headers } from "@angular/http";
import { MEAT_API } from "app/app.api";


@Injectable()
export class OrderService{
    constructor(private shopCartServ:ShoppingCartService, private http:Http){}

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
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(order => order.id)
    }
    clear(){
        this.shopCartServ.clear()
    }
}