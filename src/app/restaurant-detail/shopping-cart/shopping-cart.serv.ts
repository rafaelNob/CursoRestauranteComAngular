import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService{
    items: CartItem[] =[]
     
        clear(){
            this.items = []
        }

        addItem(item:MenuItem){
            /**
             * @param foundItem se encontrar adiciona mais um no carrinho
             */
            let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
            if(foundItem){
                foundItem.quantity = foundItem.quantity + 1;
            }else{
                this.items.push(new CartItem(item))
            }
        }
        removeItem(item:CartItem){
          /*   a partir do indicie que eu quero remover
            
           */
            this.items.splice(this.items.indexOf(item),1)
        }

        
        total():number{
            /*map substitui o item  pelo valor do item
             reduce = onde tem o valor anterior e o atual somando os 2
            */ 
            return this.items.map(item => item.value())
            .reduce((prev,value)=> prev+ value,0)
        }
}