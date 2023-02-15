import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  whoareyou: string;
  private action: any;
  name: any;

  constructor() { }

  ngOnInit(): void {
    this.whoareyou = 'Who are you ?';
  }

  maFonction(action: Event) {
    this.action = action.type;
    console.log('Action : ' + this.action);
  }
}
