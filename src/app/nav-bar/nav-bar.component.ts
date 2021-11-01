import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  dropDownItems : [
   { id: 1, itemName: 'Primary Medium'},
   { id: 2, itemName: 'Secondary Medium'},
   { id: 3, itemName: 'Inter Medium'}
   
  ]
  name: string = "Aryan";
  
  constructor() { }

  ngOnInit(): void {
  }

}
