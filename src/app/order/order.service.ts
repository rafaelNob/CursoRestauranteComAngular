import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.serv";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";


@Injectable()
export class OrderService{
    constructor(private shopCartServ:ShoppingCartService){}

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
}