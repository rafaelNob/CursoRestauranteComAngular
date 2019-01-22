import { Component, OnInit  } from '@angular/core';
import { trigger, state,style,animate,transition } from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'



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
  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.do(message =>{
      this.message= message
      this.snackVisivility = 'visible'
     
    }).switchMap(message => Observable.timer(3000)).subscribe(timer => this.snackVisivility = 'hidden')
  }
  toggleSnack(){
    this.snackVisivility = this.snackVisivility ==='hidden'?'visible':'hidden'
  }

}
