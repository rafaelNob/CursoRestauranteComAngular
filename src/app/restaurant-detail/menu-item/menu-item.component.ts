import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';
import {trigger, style,state,transition, animate} from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations:[
    trigger('menuItemAppeared',[
      state('ready',style({opacity:1})),
      transition('void => ready',[
        style({opacity:0, transform:'translateY(-20px)'}),
        animate('500ms 0s ease-in')
         
      ])
    ])
  ]
})

export class MenuItemComponent implements OnInit {

  menu='ready'
   @Input() menuItem:MenuItem
   @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
