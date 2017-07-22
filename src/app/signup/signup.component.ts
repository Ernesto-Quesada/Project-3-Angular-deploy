import { Component, OnInit } from '@angular/core';
// importing the service that will call the Express API
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // loginInfo = {};
  signupInfo = {};

  user: any;
  error: string;


  constructor(private mySessionService: SenderService, private routetheuser: Router) { }

  ngOnInit() {
    this.mySessionService.isLoggedIn()
    .then((userInfo) => {this.routetheuser.navigate(['/portal']);
  })
  .catch((err) => { this.routetheuser.navigate(['/signup'])})
  }

  signup() {
   this.mySessionService.signup(this.signupInfo)
   .then((theUsercomingFromApi) => {
     this.routetheuser.navigate(['/portal']);
   })
    .catch((err) => {
    this.user = null;
    this.error = err;
    });

    // thePromise.then((userInfo) => {
    //   this.user = userInfo;
    //   this.error = null;
    // });

    // thePromise.catch((err) => {
    //   this.user = null;
    //   this.error = err;
    // });
  }

}
