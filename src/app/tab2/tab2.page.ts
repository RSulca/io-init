import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor() {
    console.log('Hello from tab2 con.');
  }
  
  ngOnInit(){
    console.log('Hello from tab2 OnInit.');
    let num = 10;
    num=49;
    num+=10;
    num = 7;
    console.log(num);
  }

}
