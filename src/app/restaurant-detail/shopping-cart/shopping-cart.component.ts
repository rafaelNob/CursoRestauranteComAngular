import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.serv';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private  shopCarServ:ShoppingCartService) { }

  ngOnInit() {
  }
  items():any{
    return this.shopCarServ.items
  }
  total():number{
    return this.shopCarServ.total()
  }

  clear(){
    this.shopCarServ.clear()
  }

  removeItem(item:any){
    this.shopCarServ.removeItem(item)
  }

  addItem(item){
    this.shopCarServ.addItem(item)
  }

}
