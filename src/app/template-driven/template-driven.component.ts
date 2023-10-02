import { Component } from '@angular/core';

interface FormData {
  name: string;
  age: number | null;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  submitted=false;
  formData: FormData = {
    name: '',
    age: null,
    email: '',
    phone: '',
  };

  onSubmit() {
    this.submitted = true;
    console.log(this.formData);
    // (console as Console).log(this.formData);
  }
}  

