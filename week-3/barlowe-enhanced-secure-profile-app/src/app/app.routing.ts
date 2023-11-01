// Name: Justin Barlowe
// File: app.routing.ts
// Description: Routing file for secure profile app.
// Date: 10/30/2023
// Angular Version: 16.2.8
// Node Version: 16.14.0

// Import statements.
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';


// Export statement. Create routes array.
export const appRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  },

];
