
import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountPlaidService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  
  //get public data for plaid webview
  accountPlaidHome() {
    return this.http.get(this.BASE_URL + '/accountPlaid')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  //get account data
  get_access_token(publicToken: string) {
    let body = 'request='+publicToken;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.BASE_URL + '/accountPlaid/get_access_token'
                          , JSON.stringify({"publicToken": publicToken})
                          , { headers: headers })
                    .toPromise()
                    .then(()=>{
                      response => response.json()
                      })
                    .catch(()=>{
                        console.log(this.handleError) 
                      });
  }

  get_accounts(){
    return this.http.post(this.BASE_URL + '/accountPlaid/accounts/get',null)
                    .toPromise()
                    .then(response => response.json())
                    .catch(()=> console.log(this.handleError));
  }





  // getAgency(id: number) {
  //   const url = `${this.BASE_URL}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(this.handleError);
  // }
}






