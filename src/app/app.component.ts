import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user: User;
  userEndpoint: string = '/user';

  constructor(private apiService: ApiService) { }
  
  getUser(): void {
    this.user = this.apiService.getRequestUser(this.userEndpoint);    
  }

  ngOnInit(): void {
    this.getUser();
  }
}
