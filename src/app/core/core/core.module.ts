import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.serv';
import { OrderService } from 'app/order/order.service';

@NgModule({
  providers:[RestaurantService,ShoppingCartService,OrderService]
})
export class CoreModule { }
