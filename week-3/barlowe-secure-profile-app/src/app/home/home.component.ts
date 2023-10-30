// Name: Justin Barlowe
// File: home.component.ts
// Description: Home component file.
// Date: 10/30/2023

// Import statement for Component from core Angular library.
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Component declaration.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// Export class.
export class HomeComponent {
  // Assignment name variable.
  assignment: string = 'Exercise 3.3 - Passing Data To Routes, Part 2';

  // isLoggedIn variable.
  isLoggedIn: Boolean;

  // Constructor with ActivatedRoute.
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));

  }
}
