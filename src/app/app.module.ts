import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonEventsComponent } from './button-events/button-events.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { urlroutes } from './routes';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { DataTblComponent } from './data-tbl/data-tbl.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ButtonEventsComponent,
    HeaderCompComponent,
    PageNotFoundComponent,
    HomeComponent,
    FirstCompComponent,
    SecondCompComponent,
    DataTblComponent,
    ViewProductsComponent,
    AddEmpComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
