import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ageValidator } from '../Custom-Validators/age.validator';
import { phoneValidator } from '../Custom-Validators/phone.validator';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent {
  user = {
    firstName: '',
    lastName: '',
    age: null,
    email: '',
    phone: ''
  };

  submitted = false;

  // Form control for email input
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  // Form control for age input
ageFormControl = new FormControl('', [
  Validators.required,
  ageValidator
]);


  // Form control for first name input
  firstNameFormControl = new FormControl('', [
    Validators.required
  ]);

  // Form control for last name input
  lastNameFormControl = new FormControl('', [
    Validators.required
  ]);

  // Form control for phone number input
  phoneFormControl = new FormControl('', [
    Validators.required,
    phoneValidator
  ]);

  onSubmit() {
    this.submitted = true;
  }
}
