import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>
  constructor(private restService:RestaurantService,
              private router:ActivatedRoute) {}

  ngOnInit() {
    this.menu = this.restService.menuOfrestaurants(this.router.parent.snapshot.params['id'])
   
      
  }

}
