import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Wish } from '../wish';

@Component({
  selector: 'top-wishes-component',
  templateUrl: './top-wishes.component.html',
  styleUrls: ['./top-wishes.component.css'],
})

export class TopWishesComponent implements OnInit {
  BASE_URL: string = "http://localhost:3000";  
  TOP_WISHES_ENDPOINT: string = '/products/top.json';  
  topWishes: Wish[] = [];

  constructor(private http: HttpClient) { }

  getTopWishes(): void {
    this.http
    .get<Wish[]>(this.BASE_URL + this.TOP_WISHES_ENDPOINT, {observe: 'response'})
    .subscribe(resp => {
      this.topWishes = resp.body;
    })
  }

  ngOnInit() {
    this.getTopWishes();
  }

}
