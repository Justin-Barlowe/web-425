// Name: Justin Barlowe
// File: home.component.ts
// Description: This is the home component for the GPA calculator app.
// Date: 11/26/2023

// Imports
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Array of selectable grades for the dropdown menu.
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

  // Array of transcript entries.
  transcriptEntries: Array<ITranscript> = [];

  // GPA total variable
  gpaTotal: number = 0;

  // Transcript Variable
  transcriptForm!: FormGroup;

  // Constructor
  constructor(private fb: FormBuilder) {
  }

  // Save entry function.
  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
    this.transcriptEntries.push({
      course: this.form['course'].value,
      grade: this.form['grade'].value
    });

    event.currentTarget.reset();
  }

  // Calculate GPA function.
  calculateResults() {
    let gpa: number = 0;

    // For loop with switch statement to calculate GPA.
    for (let entry of this.transcriptEntries){
      switch(entry.grade) {
      case 'A': gpa += 4.0; break;
      case 'A-': gpa += 3.7; break;
      case 'B+': gpa += 3.33; break;
      case 'B': gpa += 3.0; break;
      case 'B-': gpa += 2.7; break;
      case 'C+': gpa += 2.3; break;
      case 'C': gpa += 2.0; break;
      case 'C-': gpa += 1.7; break;
      case 'D+': gpa += 1.3; break;
      case 'D': gpa += 1.0; break;
      case 'D-': gpa += 0.7; break;
      case 'F': gpa += 0; break;
      }

      // Calculate GPA total.
      this.gpaTotal = gpa / this.transcriptEntries.length;
    }
  }

  // Clear entries function.
  clearEntries(){
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

  // OnInit function to initialize the form.
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }

  // Getter for the form.
  get form() { return this.transcriptForm.controls;}

}
