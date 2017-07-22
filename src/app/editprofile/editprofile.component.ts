import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
editInfo: any = {}
user: any;
error: any;

  constructor(private mySessionService: SenderService, private routetheuser: Router) { }
    ngOnInit() {
    this.mySessionService.isLoggedIn()
    .then((userInfo) => {
        this.user = userInfo;
        console.log('this.user inside oninit', this.user);
        })
  .catch((err) => { this.routetheuser.navigate(['/profile'])})
  }
  editProfile() {
   this.mySessionService.editProfile(this.editInfo)
   .then((theEditedUsercomingFromApi) => {
     this.routetheuser.navigate(['/profile']);
   })
    .catch((err) => {
      // fix this if error redirect to profile with a message
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
