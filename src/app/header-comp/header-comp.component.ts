import { Component, Input, OnInit } from '@angular/core';
import { navItems } from '../model/nav';
@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit {

  constructor() { }
  @Input() nvLst:navItems[]=[
{
navNm:'Home',
path:'/home'

},
{
  navNm:'About Us',
  path:'/about'
  
  },
  {
    navNm:'Services',
    path:'/services/200'
    
    },
    {
      navNm:'Career',
      path:'/career'
      
      },
      {
        navNm:'Contact Us',
        path:'/contact'
        
        }
  
]


  ngOnInit(): void {
  }

}
