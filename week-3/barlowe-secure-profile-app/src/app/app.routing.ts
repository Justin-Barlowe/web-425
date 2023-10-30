// Name: Justin Barlowe
// File: app.routing.ts
// Description: Routing file for secure profile app.
// Date: 10/30/2023

// Import statements.
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';


// Export statement. Create routes array.
export const appRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

];
