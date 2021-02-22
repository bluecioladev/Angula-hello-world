import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[testjarb]',
  templateUrl: './testjarb.component.html',
  styles: [`
  div{
    color:red;

  }
  
  `]
})
export class TestjarbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
