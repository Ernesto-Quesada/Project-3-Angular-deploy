import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import {AgencyService} from '../agency.service'


import { AgencyComponent} from '../agency/agency.component';
@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css']
})
export class AgencyDetailsComponent implements OnInit {
@Input() agencyToDetails: any;
@Input() user: any;
err: any;

  constructor(private agencyService: AgencyService ) { }

  //   ngOnInit(): void {
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => this.agencyService.getAgencyDetails(+params.get('id')))
  //     .subscribe(agency => this.agency = agency);
  // }
    ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.getAgencyDetails(params['id']);
    //   console.log('--PAR', params['id'])
    // });
  }

  // getAgencyDetails(id) {
  //   this.agencyService.getAgencyDetailsinService(id)
  //   .then((theAgencyDetails) => {
  //     this.agency = theAgencyDetails;
  //     console.log('----', theAgencyDetails)
  //     console.log('----', this.agency)
  //   })
  //     .catch((err) => {
  //       this.err = 'Could not retreive phone details';
  //     });
  // }


}

