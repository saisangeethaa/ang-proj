import { SecondCompComponent } from './../second-comp/second-comp.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {employee} from '../model/employee'
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  @ViewChild('second')
  secComp={} as SecondCompComponent;
  constructor() { }

  empData:employee[]=[
    {
    empID:201,
    fullName: 'Sai',
    address:'Chennai',
    cnt:349754321,
    doj:'14-08-2017'
    
    },
    {
      empID:202,
    fullName: 'SaiSangee',
    address:'Chennai',
    cnt:349754321,
    doj:'14-08-2017'
      
      },
      {
        empID:203,
    fullName: 'Sai',
    address:'Goa',
    cnt:349754321,
    doj:'14-08-2017'
        
        },
        {
          empID:204,
    fullName: 'Saran',
    address:'Bangalore',
    cnt:349754321,
    doj:'14-08-2018'
          
          },
          {
            empID:205,
    fullName: 'Sangee',
    address:'Pune',
    cnt:349754321,
    doj:'14-08-2019'
            
            },
            
              
      
    ];
  childCounterVal:string | undefined;
  
  ngOnInit(): void {
    //this.secComp?.printStrValUppcs();
   // console.log(this.secComp)
//let color = this.secComp?.getColor("India");
//console.log(color)

  }
getProducts(){
  //this.secComp.printStrValUppcs();
//let color = this.secComp.getColor("India");
console.log(this.secComp.months)
  
  
}
updateCounter(e: any){
  console.log(e);
  this.childCounterVal = e; 
}

//updateEmpDtls(empId: any){
//console.log(empId);
//this.empData = this.empData.filter(emp => emp.empID != empId);
//}

}
 