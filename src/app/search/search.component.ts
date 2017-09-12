import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

import { Wish } from '../wish';
import { SearchResult } from '../search-result';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ApiService]
})
export class SearchComponent implements OnInit {
  // query: string;
  // searchEndpoint: string = '/search';
  BASE_URL: string = "http://localhost:3000";
  SEARCH_ENDPOINT: string = '/products/search.json?query=';
  DRAFT_WISH: string = 'draft.json';
  WISHES_PATH: string = '/wishes.json';
  WISH_PATH: string = '/wishes/';

  results: SearchResult[] = [];

  constructor(private apiService: ApiService, private http: HttpClient) { }

  search(query: string): void {
    this.http
    .get<SearchResult[]>(this.BASE_URL + this.SEARCH_ENDPOINT + query, {observe: 'response'})
    .subscribe(resp => {
      this.results = resp.body;
    })
  };

  ngOnInit(): void { }

}
