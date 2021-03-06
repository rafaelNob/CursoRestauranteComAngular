import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup,Validator, Validators} from '@angular/forms'
import { LoginService } from './login.service';

import{NotificationService} from 'app/shared/messages/notification.service'
import { User } from './user.model';



@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb:FormBuilder,
              private loginService:LoginService,
              private notFicServ: NotificationService) { }
  user:User
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('',[Validators.required,Validators.email]),
      password: this.fb.control('',[Validators.required])
    })
  }
  login(){
    this.loginService
    .login(this.loginForm.value.email,this.loginForm.value.password)
    //callback do sucesso
    .subscribe(user =>  this.notFicServ.notify(`Bem Vindo `
    ),
      response => //tipo HttpErrorResponse
     this.notFicServ.notify( response.error.message))


  
  }
}
