import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  paymentOptions:RadioOption[] =[
    { 
    label: 'Dinheiro',
    value:'MON'
    },
    {
      label: 'Cartão de Débito',
      value:'DEB'
    },
    {
      label: 'Cartão de Refeição',
      value:'REF'
    }
]

  constructor(private ordService:OrderService) { }

  ngOnInit() {
  }

  cartItems():CartItem[]{
    console.log("CHAMOU CAR ITEMS");
    
    return this.ordService.cartItems()
  }

  increase(item:CartItem){
    
    return this.ordService.increasyQty(item)
  }

  decrease(item:CartItem){
    return this.ordService.decreasyQty(item)
  }

  remove(item:CartItem){
    return this.ordService.remove(item)
  }

  increaseQty(item:CartItem){
    return this.ordService.increasyQty(item)
  }

  decreaseQty(item:CartItem){
    return this.ordService.decreasyQty(item)
  }
 

}
