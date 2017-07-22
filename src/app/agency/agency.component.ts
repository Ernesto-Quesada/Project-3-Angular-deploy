import { Component, OnInit } from '@angular/core';
import {AgencyService} from '../agency.service'
import { SenderService } from '../sender.service';
@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
agencies: any
selectedAgency: any;
user: any;
  constructor(
              private agencyService: AgencyService,
              private mySessionService: SenderService) { }

  ngOnInit(): void {
    this.getAgencies();
    this.mySessionService.isLoggedIn()
      .then((theUsercomingFromApi ) => {
      this.user = theUsercomingFromApi;
      console.log('the user in agencies', this.user)
    })
    .catch((err) => {console.log('user not logged')
        });
  }
  getAgencies(): void {
    this.agencyService
        .getAgencies()
        .then((agency )=> {
          this.agencies = agency;
        console.log('AGENCIES',this.agencies)});
        
  }
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.agencyService.create(name)
  //     .then(agency => {z
  //       this.agencies.push(agency);
  //       this.selectedagency = null;
  //     });
  // }

  delete(agency): void {
    this.agencyService
        .delete(agency._id)
        .then(() => {
          this.agencies = this.agencies.filter(h => h !== agency);
          if (this.selectedAgency === agency) { this.selectedAgency = null; }
        });
  }

  // ngOnInit(): void {
  //   this.getagencies();
  // }

  onSelect(agency): void {
    this.selectedAgency = agency;
  }
  // agencyIsSelected(): void {
  //   console.log('agency', this.selectedAgency)
  // }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedagency.id]);
  // }

}
