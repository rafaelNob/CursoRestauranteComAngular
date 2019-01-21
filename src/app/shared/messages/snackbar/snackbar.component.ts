import { Component, OnInit  } from '@angular/core';
import { trigger, state,style,animate,transition } from '@angular/animations';


@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations:[
    trigger('snack-visivility',[
      state('hidden', style({ opacity:'0', bottom:0})),
      state('visible', style({ opacity:'1', bottom:30})),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-in')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {
  message='Hello there'
  snackVisivility:string='hidden'
  constructor() { }

  ngOnInit() {
  }
  toggleSnack(){
    this.snackVisivility = this.snackVisivility ==='hidden'?'visible':'hidden'
  }

}
