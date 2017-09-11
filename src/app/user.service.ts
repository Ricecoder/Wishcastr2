import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UserService {
  user: string[];

  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get('/user').subscribe(
      data => {
        this.user = data['results']
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error has occurred: ', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`)
        }

      }
    )
  }
};
