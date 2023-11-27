// Name: Justin Barlowe
// File: grade-summary.component.ts
// Description: Grade summary component for the GPA calculator app.
// Date: 11/27/2023

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent {

  // Input variables. Due to strict typechecking ! is used to show that it will be used later.
  @Input() grade!: string;
  @Input() course!: string;

}
