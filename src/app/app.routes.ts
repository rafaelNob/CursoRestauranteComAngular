import {HomeComponent} from './home/home.component'
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const ROUTER= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },{
        path:'restaurantes',
        component: RestaurantsComponent
    }
]

