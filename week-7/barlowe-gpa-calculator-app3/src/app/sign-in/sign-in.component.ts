// Name: Justin Barlowe
// File: sign-in.component.ts
// Description: Sign-in component for the GPA calculator app.
// Date: 11/28/2023

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  signInForm!: FormGroup;
  errorMessage!: string;

  constructor(private router: Router, private CookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      studentId: ''
    })
  }

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

}
