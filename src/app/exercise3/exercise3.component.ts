import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component {
  status = true;


  changeBooleanValue() {
    this.status = !this.status;
  }
}
