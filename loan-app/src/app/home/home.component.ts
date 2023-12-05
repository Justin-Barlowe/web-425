// Name: Justin Barlowe
// File: home.component.ts
// Description: Home component file for the loan application.
// Date: 12/4/2023
// Angular Version: 16.2.10

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

loanForm!: FormGroup;

ngOnInit() {
  // Validate the form fields.
  this.loanForm = new FormGroup({
    loanAmount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    interestRate: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*\.?[0-9]*$')]),
    numberOfYears: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    monthlyPayment: new FormControl({value: '', disabled: true}),
    totalInterestPaid: new FormControl({value: '', disabled: true})
  });
}


// Submit function.
onSubmit() {
  if (this.loanForm.valid) {
    this.calculateLoan();
  }
}

// Helper method added due to error null checks causing errors.
getFormValue(controlName: string): any {
  const control = this.loanForm.get(controlName);
  return control ? control.value : null;
}

// Calculate the loan, changes made to provided code to fix errors conflicting with my naming conventions and null checks causing errors.
calculateLoan() {

  // Setting variables for the loan calculation.
  const P = this.getFormValue('loanAmount');
  const r = this.getFormValue('interestRate') / 100 / 12;
  const n = this.getFormValue('numberOfYears') * 12;

  // Using provided formula to calculate the loan.
  const A = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalInterestPaid = (A * n) - P;

  // Setting the form control values.
  this.setCalcValue('monthlyPayment', A.toFixed(2));
  this.setCalcValue('totalInterestPaid', totalInterestPaid.toFixed(2));
}

// Runtime error fix due to null or undefined form control.
setCalcValue(controlName: string, value: any): void {
  const control = this.loanForm.get(controlName);
  if (control) {
    control.setValue('$' + value);
  }
}

// Reset the form.
resetForm() {
  this.loanForm.reset();
}
}
