import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    userLogged = false;

  constructor(
    private mySessionService: SenderService,
    private routetheuser: Router
  ) { }
      ngOnInit() {
      this.mySessionService.loggedIn$.subscribe((userFromApi) => {
          this.userLogged = true;
        console.log('userlogged inside Oninit. should be true', this.userLogged)

        });


      this.mySessionService.isLoggedIn()
        // if logged in, redirect to /profile
        .then((userInfo) => {
            this.routetheuser.navigate(['/portal']);
            this.userLogged = true;
    console.log('userlogged inside Oninit after isLogged is called. should be true', this.userLogged)

        })
        // else redirect to /
        .catch((err) => {
            this.routetheuser.navigate(['/']);
        });
  }

  logMeOut() {
      this.mySessionService.logout()
        .then(() => {
            this.routetheuser.navigate(['/']);
            this.userLogged = false;
    console.log('userlogged inside logMeOut. should be false', this.userLogged)
        })
        .catch((err) => {
            this.routetheuser.navigate(['/']);
            this.userLogged = true;
 console.log('userlogged inside logMeOut and catch', this.userLogged)
             console.log(err)


        });
  }
 
  handleLogin(userFromApi) {
      this.userLogged = true;
    console.log(this.userLogged,'handle')
  }

}
