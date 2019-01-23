import { Component, OnInit  } from '@angular/core';
import { Restaurant } from './restaurant/restaurante.model';
import { RestaurantService } from './restaurants.service';
import{trigger, style,animate,state,transition}from '@angular/animations'


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations:[
    trigger('toogleSearch',[
      state('hidden',style({opacity:0,"max-height":"0px"})),
      state('visible',style({opacity:1,"max-height":"70px" ,"margin-top":"20px"})),
      transition("* => *" , animate("250ms 0s ease-in-out "))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searBarState='hidden'
  restaurants: Restaurant[]
  constructor( private restService: RestaurantService) { }

  ngOnInit() {
   this.restService.restaurants().subscribe(restaurantes => this.restaurants = restaurantes )
  }

  toggleSearch(){
      state('visible',style({opacity:1,"max-height":"70px"})),
    this.searBarState = this.searBarState === 'hidden'?'visible':'hidden'
  }

}
