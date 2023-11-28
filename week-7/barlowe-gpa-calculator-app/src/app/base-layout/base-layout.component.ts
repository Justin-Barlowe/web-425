// Name: Justin Barlowe
// File: base-layout.component.ts
// Description: This is the base layout component for the GPA calculator app.
// Date: 11/26/2023

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {
assignment!: string;

  constructor(private cookieService: CookieService, private router: Router) {
this.assignment = 'GPA Calculator'; }

    // Sign out function
    signOut() {
      this.cookieService.deleteAll();
      this.router.navigate(['/session/sign-in']);
    }
}
