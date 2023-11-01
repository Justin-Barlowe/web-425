// Name: Justin Barlowe
// File: app.module.ts
// Description: App module file.
// Date: 10/30/2023
// Angular Version: 16.2.8
// Node Version: 16.14.0

// Import statements.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import statements for components and routes.
import { AppComponent } from './app.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { MyImageComponent } from './my-image/my-image.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    MyImageComponent,
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
