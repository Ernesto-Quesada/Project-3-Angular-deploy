import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miniprofile',
  templateUrl: './miniprofile.component.html',
  styleUrls: ['./miniprofile.component.css']
})
export class MiniprofileComponent implements OnInit {
  user: any;
  errorMessage: any;

  constructor(private mySessionService: SenderService, private routetheuser: Router) { }

ngOnInit() {
    this.mySessionService.isLoggedIn()
    .then((userInfo) => {
      this.user = userInfo;
    console.log('this.user', this.user)

      // this.routetheuser.navigate(['/profile']);
  })
  .catch((err) => { this.routetheuser.navigate(['/'])});

  this.mySessionService.getProfile()
      .then((theUsercomingFromApi) => {
      this.user = theUsercomingFromApi;
      console.log('llllll', theUsercomingFromApi);
      console.log('this.user', this.user)
      this.errorMessage = null;
      this.routetheuser.navigate(['/portal']);
    })
    .catch((err) => {
      const apiInfo = err.json();
            this.errorMessage = apiInfo.message;
    });
  
  }

}


