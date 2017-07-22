import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AgencySearchService {
 
  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http) { }

  search(term): Observable<any[]> {
    return this.http
              .get(this.BASE_URL + `/agency/?name=${term}`)
              .map(response => response.json().data as any[] );
}

}
