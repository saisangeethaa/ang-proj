import { ViewProductsComponent } from './view-products/view-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ButtonEventsComponent} from './button-events/button-events.component';
import{HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';

const urlroutes: Routes = [
  {
    path:'home',
    component: FirstCompComponent
  },
  {
    path:'services/:sid',
    component: SecondCompComponent
  },
  
  {
    path:'products',
    component: SecondCompComponent
  },

  {
    path:'myshop/contact us',
    component: SecondCompComponent
  },

  {
    path:'viewproducts',
    component: ViewProductsComponent
  },
  {
    path:'add-employee',
    component: AddEmpComponent
  },


  {path:'',  
  redirectTo:'/home',
  pathMatch:'full'
  },

  {
    path:'**',
    component: PageNotFoundComponent
  }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(urlroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
