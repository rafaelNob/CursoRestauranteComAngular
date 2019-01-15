import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order ,OrderItem} from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
     /* codigo para formBuilder */
       orderForm: FormGroup

    delivery: number = 8

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

  constructor(private ordService:OrderService, private router:Router , private fb:FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      emailConfirmation: this.fb.control(''),
      address: this.fb.control(''),
      number: this.fb.control(''),
      optionalAddress: this.fb.control(''),
      paymentOption: this.fb.control('')
    })

  }
  itemsValue(): number{
    return this.ordService.itemsValue()
  }

  cartItems():CartItem[]{

    
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
 
    checkOrder(order:Order){
      order.orderItem = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity,item.menuItem.id))
      this.ordService.checkOrder(order).subscribe((orderId: string) => {
        this.router.navigate(['/order-summary'])
        console.log(`Compra Concluida ${orderId}`)
        this.ordService.clear()
        
      })
      console.log(order);
      
    }

}
