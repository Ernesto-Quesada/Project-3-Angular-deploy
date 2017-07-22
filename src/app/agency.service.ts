
import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AgencyService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // tslint:disable-next-line:no-inferrable-types
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }
  // getAgency() {
  //   return this.http.get('http://localhost:3000/agencies')
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
  getAgencies() {
    return this.http.get(this.BASE_URL + '/agencies')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  getAgencyDetailsinService(id) {
    console.log('from agency service', id);
return this.http
.get(
  this.BASE_URL + `/agency/${id}`)
      .toPromise()
      .then(res => res.json() )
      .catch(this.handleError);
  }








  delete(id: number): any  {
    // const url = `${this.BASE_URL}/${id}`;
    // return this.http.delete(url, {headers: this.headers})
    //   .toPromise()
    //   .then(() => null)
    //   .catch(this.handleError);
    return this.http.delete(`${this.BASE_URL}/agency/${id}`)
      .toPromise()
      .then(response => response.json())
               .catch(this.handleError);
  }

}






