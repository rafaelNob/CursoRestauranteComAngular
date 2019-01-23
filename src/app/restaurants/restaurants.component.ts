import { Component, OnInit  } from '@angular/core';
import { Restaurant } from './restaurant/restaurante.model';
import { RestaurantService } from './restaurants.service';
import{trigger, style,animate,state,transition}from '@angular/animations'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'

import'rxjs/add/operator/switchMap'


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
  searchForm:FormGroup
  searchControl:FormControl

  constructor( private restService: RestaurantService,
               private fb:FormBuilder) { }

               ngOnInit() {

                this.searchControl = this.fb.control('')
                this.searchForm = this.fb.group({
                  searchControl: this.searchControl
                })
            
                this.searchControl.valueChanges // cada plavra digitada ValueChanges pega a digitação
                    .debounceTime(500) // manda msg se a diferença entre 2 eventos for maior que o tempo informado
                    .distinctUntilChanged() // evento que esperao os 500ms e se for igual ao ultimo
                    .switchMap(searchTerm => 
                      this.restService
                        .restaurants(searchTerm) //controla varias requisições e não sobscreve as mesmas
                        .catch(error=>Observable.from([]))) //é usado para criar uma string apartir de um array
                    .subscribe(restaurants => this.restaurants = restaurants)
            
                this.restService.restaurants()
                  .subscribe(restaurants => this.restaurants = restaurants)
              }


  
  toggleSearch(){
      state('visible',style({opacity:1,"max-height":"70px"})),
    this.searBarState = this.searBarState === 'hidden'?'visible':'hidden'
  }

}
