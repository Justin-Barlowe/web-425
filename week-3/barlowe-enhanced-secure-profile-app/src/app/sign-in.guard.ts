// Name: Justin Barlowe
// File: sign-in.guard.ts
// Description: Guard for sign-in page
// Date: 10/30/2023
// Angular Version: 16.2.8
// Node Version: 16.14.0

// Import statements. CanActivate is deprecated in Angular 16 but still works.
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Injectable decorator for dependency injection.
@Injectable({
  providedIn: 'root',
})
// Export class.
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}
  // CanActivate function. Depreciated but functional.
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Checking is user is logged in via query parameter.
    let isLoggedIn = next.queryParams['isLoggedIn'];
    // If user is logged in, return true. Else, navigate to login page.
    if (isLoggedIn === 'true') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
