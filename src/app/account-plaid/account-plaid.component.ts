import { Component, OnInit } from '@angular/core';
import {AccountPlaidService} from '../accountPlaid.service'

@Component({
  selector: 'app-account-plaid',
  templateUrl: './account-plaid.component.html',
  styleUrls: ['./account-plaid.component.css']
})

export class AccountPlaidComponent implements OnInit {

  PLAID_ENV:string;
  PLAID_PUBLIC_KEY:string;
  _accountPlaidService:AccountPlaidService;
  accountsUser:any;

  constructor(private accountPlaidService: AccountPlaidService) 
  {
    this._accountPlaidService=accountPlaidService;
  }

  ngOnInit() {
    this.configKeys();
  }
  
  configKeys(): void {
    console.log("before"+this.PLAID_PUBLIC_KEY)
    this._accountPlaidService
      .accountPlaidHome()
      .then(accountData=>{
        this.PLAID_ENV=accountData.PLAID_ENV;
        this.PLAID_PUBLIC_KEY=accountData.PLAID_PUBLIC_KEY
      });
    console.log("after"+this.PLAID_PUBLIC_KEY)
  }

  openLink() {
    const accountPlaidComponent=this;
    var handler = (<any>window).Plaid.create({
      apiVersion: 'v2',
      clientName: 'Plaid Walkthrough Demo',
      env: this.PLAID_ENV,
      product: ['transactions'],
      key: this.PLAID_PUBLIC_KEY,
      // isWebview:false,
      onSuccess: function(public_token) {
        accountPlaidComponent._accountPlaidService.get_access_token(public_token)
        .then(()=>{
          // console.log("llamar_a_los_accounts")
        accountPlaidComponent._accountPlaidService.get_accounts()
          .then(accounts=>{
            accountPlaidComponent.accountsUser= accounts.results

            accounts.results.forEach(element => {
              console.log(element.name);
            });  

            
          })
        })


        // $.post('/accountPlaid/get_access_token', {
        //   public_token: public_token
        // }, function() {
        //    $.post('/accountPlaid/accounts/get',function(data) {
        //       consoel.log(data);
        //     }).fail(function(){
        //       console.log("error in accounts")
        //     });
        // });
      },
    });
     
    handler.open();
    // handler.open({
    //   name: 'Demo Site',
    //   description: '2 widgets',
    //   amount: 2000
    // });

  }
}
