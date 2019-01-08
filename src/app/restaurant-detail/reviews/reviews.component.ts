import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>
  constructor(private restService:RestaurantService,
              private router:ActivatedRoute
    ) { }

  ngOnInit() {
    /* obs: o parent da rota acessa o filho na rota this.router.'''parent'''.snapshot.params */ 
  this.reviews=  this.restService.reviewsOfrestaurants(this.router.parent.snapshot.params['id'])
  }

}
