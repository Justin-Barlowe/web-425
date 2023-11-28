// Name: Justin Barlowe
// File: gpa.component.ts
// Description: GPA component for the GPA calculator app.
// Date: 11/27/2023

// Imports
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})

export class GpaComponent {

  // GPA input variable. Due to strict typechecking ! is used to show that it will be used later.
  @Input() gpaTotal!: number;

}
