import { Component, OnInit, Input } from '@angular/core';
import {CurrencyPipe } from '@angular/common';

import { Wish } from '../wish';

@Component({
  selector: 'results-component',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() results: Wish[];
  price: string = "13.5";
  description: string = `Official Super Mario All Star Collection Plush 
  By Sanei Cute and collectible Soft and Cuddly!Limited availability 
  Approx. Size: 4&quot;L x 6&quot;W x 8&quot;H `;
  
  constructor() { }

  ngOnInit() {

  }

}
