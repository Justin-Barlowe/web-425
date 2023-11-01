// Name: Justin Barlowe
// File: signin.component.ts
// Description: Signin component file.
// Date: 10/30/2023

// Import statement for Component from core Angular library.
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Component declaration.
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  // isLoggedIn variable.
  isLoggedIn: boolean = false;

  // Constructor.
  constructor(private router: Router) { }

  // Sign in function.
  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], { queryParams: { isLoggedIn: this.isLoggedIn }, skipLocationChange: true});
  }
}
