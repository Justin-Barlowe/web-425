// Name: Justin Barlowe
// File: app.module.ts
// Description: Module file for the app component
// Date: 10/25/2023

// Angular imports.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App and componment imports.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// Module declaration.
@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
