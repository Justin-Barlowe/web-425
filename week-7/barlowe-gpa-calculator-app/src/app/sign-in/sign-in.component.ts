// Name: Justin Barlowe
// File: sign-in.component.ts
// Description: Sign-in component for the GPA calculator app.
// Date: 11/28/2023

// Imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  // Not null operator (!) added due to strict type checking.
  signInForm!: FormGroup;
  errorMessage!: string;

    // Injecting Router, CookieService, FormBuilder, and SignInService.
  constructor(private router: Router, private CookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) { }

  // Initializing the form.
  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  // On submit, if the student ID is valid, set the cookie and navigate to the home page.
  onSubmit() {
    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signInService.validate(studentId)) {
      this.CookieService.set('session_user', studentId.toString(), 1);
       this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid Student ID';
    }
  }

  // Get form controls.
  get() {
    return this.signInForm.controls;
  }

}
