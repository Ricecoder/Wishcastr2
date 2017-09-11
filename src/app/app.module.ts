import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { UserWishesComponent } from './user-wishes/user-wishes.component';
import { TopWishesComponent } from './top-wishes/top-wishes.component';
import { WishComponent } from './wish/wish.component';
import { SearchComponent } from './search/search.component';

import { ApiService } from './api.service';
import { RouterModule, Routes } from '@angular/router';
import { LimitToPipe } from './limit-to.pipe';


const appRoutes: Routes = [
  { path: "results", component: ResultsComponent },
  { path: "", component: TopWishesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    UserWishesComponent,
    TopWishesComponent,
    WishComponent,
    SearchComponent,
    LimitToPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } 
    ),
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
