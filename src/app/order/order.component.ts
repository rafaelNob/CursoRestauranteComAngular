import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order ,OrderItem} from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
     /* codigo para formBuilder */
       orderForm: FormGroup

    delivery: number = 8

    email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    number = /^[0-9]*$/;

    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

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

  constructor(private ordService:OrderService, private router:Router , private formBuilder:FormBuilder) { }

    ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('' ,[Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
      number: this.formBuilder.control('',[Validators.required,Validators.pattern(this.number)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[Validators.required])

    },{validator: OrderComponent.equalsTo})

  } 
 
  
  /* ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])

    }, {validator: OrderComponent.equalsTo})
  } */

  static equalsTo(group:AbstractControl):{[key:string]:boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')

    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
    
  }

  /* static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  } */

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
