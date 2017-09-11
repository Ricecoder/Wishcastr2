import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Wish } from './wish';



@Injectable()
export class ApiService {
  results: Object = [];

  constructor(private http: HttpClient) { }

  getRequest(endpoint: string): any {
    console.log("api");
    this.http
        .get(endpoint, {observe: 'response'})
        .subscribe(resp => {
          this.results = resp.body;
          // JSON.parse(this.results);
          console.log( this.results);
        })
    console.log("RETURN: " + this.results);
    return this.results;        
  };


  // FIXME: Temporary Mock!!!!
  getRequestUser(something): any {
    return {"id": 1, "name": "Lacey"};
  }
}


/*
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

import { Wish } from './wish';



@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getRequest(endpoint: string): Observable<any[]> {
    console.log("api");
    return this.http
               .get(endpoint)
               .map(response => response.json().data as any[]);
                
  };


  // FIXME: Temporary Mock!!!!
  getRequestUser(something): any {
    return {"id": 1, "name": "Lacey"};
  }
}
*/