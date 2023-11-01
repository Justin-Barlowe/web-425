// Name: Justin Barlowe
// File: home.component.ts
// Description: Home component file.
// Date: 10/30/2023
// Angular Version: 16.2.8
// Node Version: 16.14.0

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
  assignment: string = 'Exercise 3.4 - Guarding Routes';

  }
