import { Component , OnInit} from '@angular/core';
import { SenderService } from './sender.service';
import { NavigationComponent } from './navigation/navigation.component';

// import { EmiterComponent } from './emiter/emiter.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sender';
  // loginInfo = {};
  // user: any; 
  // error: any;
  // isLoggedIn: boolean = false;

  // constructor(
  //   private mySessionService: SenderService,
  //   private routetheuser: Router
  // ) { }
  //     ngOnInit() {
  //     this.mySessionService.loggedIn$.subscribe((userFromApi) => {
  //         this.isLoggedIn = true;
  //     });

  //     this.mySessionService.isLoggedIn()
  //       // if logged in, redirect to /profile
  //       .then((userInfo) => {
  //           this.routetheuser.navigate(['/profile']);
  //           this.isLoggedIn = true;
  //       })
  //       // else redirect to /
  //       .catch((err) => {
  //           this.routetheuser.navigate(['/']);
  //       });
  // }
  // logMeOut() {
  //     this.mySessionService.logout()
  //       .then(() => {
  //           this.routetheuser.navigate(['/']);
  //           this.isLoggedIn = false;
  //       })
  //       .catch(() => {});
  // }

  // handleLogin(userFromApi) {
  //     this.isLoggedIn = true;
  // }

}
