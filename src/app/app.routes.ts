import {HomeComponent} from './home/home.component'
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

export const ROUTER= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'restaurantes/:id',
        component: RestaurantDetailComponent
    },
    {
        path:'restaurantes',
        component: RestaurantsComponent
    }
]

