import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.serv';
import { OrderService } from 'app/order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from 'app/security/login/login.service';



@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [ InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
  exports:[CommonModule,FormsModule,ReactiveFormsModule
          ,InputComponent,RadioComponent,RatingComponent,SnackbarComponent]
})
export class SharedModule {
    static forRoot():ModuleWithProviders{

        return{
            ngModule:SharedModule,
            providers:[RestaurantService,ShoppingCartService,OrderService,NotificationService,LoginService]
            
        }
    }

 }
