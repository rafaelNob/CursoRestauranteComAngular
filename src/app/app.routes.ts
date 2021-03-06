import {HomeComponent} from './home/home.component'

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import{}from 'app/order/order.module'
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';

export const ROUTER= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'about',
       loadChildren:'app/about/about/about.module#AboutModule'
    },
      {
            path:'restaurants/:id',
            component: RestaurantDetailComponent ,
            children:[
            {path:'', redirectTo:'menu',pathMatch:'full'},
            {path:'menu', component:MenuComponent},
            {path:'reviews', component: ReviewsComponent}
        ] 
        }, 
    {
        path:'restaurants',
        component: RestaurantsComponent
    },
    {
        path:'order',
        loadChildren:'app/order/order.module#OrderModule',
        canload:[LoggedInGuard]
    },
    {
        path:'order-summary',
        component: OrderSummaryComponent
    },
    {
        path:'**',
        component: NotFoundComponent
    }
]

