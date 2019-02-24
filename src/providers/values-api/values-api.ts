import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ValuesApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValuesApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ValuesApiProvider Provider');
  }

  public getValues() {
    return this.http.get('http://localhost:5000/api/values');
  }

}
