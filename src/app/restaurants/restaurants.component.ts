import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurante.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[]
  constructor( private restService: RestaurantService) { }

  ngOnInit() {
   this.restService.restaurants().subscribe(restaurantes => this.restaurants = restaurantes )
  }

}
