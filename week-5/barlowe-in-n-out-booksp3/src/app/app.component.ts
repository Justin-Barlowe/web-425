// Name: Justin Barlowe
// File: app.component.ts
// Description: Component for the application.
// Date: 11/16/2023

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string

  constructor() {
    this.assignment = 'Exercise 5.4 - Dialogs'
  }

}
