import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() logMe: EventEmitter<any> = new EventEmitter<any>();
  loginInfo = {};
  user: any;
  error: any;
  constructor(private mySessionService: SenderService, private routetheuser: Router) { }
  ngOnInit() {
   this.mySessionService.isLoggedIn()
      .then((theUsercomingFromApi ) => {
      this.user = theUsercomingFromApi
    })
    .catch((err) => {
        });
  }
  login() {
     this.mySessionService.login(this.loginInfo)
      .then((theUsercomingFromApi) => {
        this.mySessionService.loggedIn(theUsercomingFromApi);
      // this.user = theUsercomingFromApi;
      this.error = null;
      this.routetheuser.navigate(['/portal']);
    console.log('USER INFO form api', theUsercomingFromApi);
    console.log('USER', this.user);
    })
    // console.log('LOGIN INFO FROM THE HTML FORM', this.loginInfo);
    .catch((err) => {
      const apiInfo = err.json();
            this.error = apiInfo.message;
    });
  }


}





