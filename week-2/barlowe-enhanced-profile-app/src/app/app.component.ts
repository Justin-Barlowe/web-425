// Name: Justin Barlowe
// File: my-details.component.ts
// Description: Details component file.
// Date: 10/23/2023

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isLoggedIn defined data type.
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
