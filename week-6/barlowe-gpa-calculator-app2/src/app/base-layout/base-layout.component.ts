// Name: Justin Barlowe
// File: base-layout.component.ts
// Description: This is the base layout component for the GPA calculator app.
// Date: 11/26/2023

import { Component } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {
assignment!: string;

  constructor() {
this.assignment = 'Exercise 6.4 - Input Properties'; }
}
