import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";


@Injectable()
export class ShoppingCartService{
    items: CartItem[] =[]
     constructor(private notificationService:NotificationService){}
        clear(){
            this.items = []
        }

        addItem(item:MenuItem){
            /**
             * @param foundItem se encontrar adiciona mais um no carrinho
             */
            let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
            if(foundItem){
                this.increasyQty(foundItem)
            
            }else{
                this.items.push(new CartItem(item))
            }
            this.notificationService.notify(`Você adicionou o item ${item.name}`)
        }

        increasyQty(item: CartItem){
            item.quantity =  item.quantity + 1
        }

        decreasyQty(item: CartItem){
            item.quantity =  item.quantity - 1
            if(item.quantity === 0){
                this.removeItem(item)
            }
        }

        removeItem(item:CartItem){
          /*   a partir do indicie que eu quero remover
            
           */
            this.items.splice(this.items.indexOf(item),1)
            this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
        }

        
        total():number{
            /*map substitui o item  pelo valor do item
             reduce = onde tem o valor anterior e o atual somando os 2
            */ 
            return this.items.map(item => item.value())
            .reduce((prev,value)=> prev+ value,0)
        }
}