import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurante.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restService:RestaurantService,
              private route:ActivatedRoute) { }
  restaurante:Restaurant
  ngOnInit() {
    this.restService.restaurantById(this.route.snapshot.params['id']).subscribe(data => this.restaurante = data)
    this.restService.restaurantById(this.route.snapshot.params['id']).subscribe(data => console.log('RETORNANDO ' + data)
    )
  }

}
