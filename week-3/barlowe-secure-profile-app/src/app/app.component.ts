// Name: Justin Barlowe
// File: my-details.component.ts
// Description: Details component file.
// Date: 10/30/2023

// Import statement for Component from core Angular library.
import { Component } from '@angular/core';

// Component declaration.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Export class.
export class AppComponent {
  // isLoggedIn defined data type.
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
  title: string = 'Secure Profile App';
}
