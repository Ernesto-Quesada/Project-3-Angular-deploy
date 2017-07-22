import { Component, OnInit, Output,Input } from '@angular/core';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.css']
})
export class RelativeComponent implements OnInit {
  @Input() relativeToDetails: any;
  relatives: any;
  error: any;
  constructor(private mySessionService: SenderService, private routetheuser: Router) { }

  ngOnInit() {
  //   this.mySessionService.isLoggedIn()
  //   .then((user) => {this.relatives = relativesToDetails;
  //     console.log('relatives', this.relatives)
  // })
  // .catch((err) => { this.routetheuser.navigate(['/signup'])})
}
// relativ() {
  //   this.mySessionService.getRelatives()
  //   .then((relatives) => {
  //     this.relatives = relatives;
  //     this.error = null;

  //   })
  //   .catch((err) => {
  //     this.relatives = null;
  //     this.error = err;
  //   });
  // }




}
