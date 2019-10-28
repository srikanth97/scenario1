import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
      <h2>Enter text  you want to display in the console:</h2>
      <input type="text" [(ngModel)]="display">
      <button (click)="displayInConsole()">Display</button>
  `
})
export class AppComponent {
  title = 'scenario1';
  display: String;


  displayInConsole() {
    console.log(this.display);
    this.display ="";
  }
}
