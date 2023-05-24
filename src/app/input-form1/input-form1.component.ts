import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form1',
  templateUrl: './input-form1.component.html',
  styleUrls: ['./input-form1.component.css']
})
export class InputForm1Component {

  theForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', {
      validators: [Validators.required, Validators.email]
    }],
    status: ['', Validators.required],
    favoriteNumber: ['', {
      validators: [Validators.required, 
        Validators.pattern('^-?[0-9]+(\.[0-9]*)?$')] 
    }]
  });

  constructor(
    private fb: FormBuilder
  ) {

  }

  save() {
    console.log(this.theForm.value);
  }

  populateWithData() {
    this.theForm.patchValue({
      firstName: 'Ben',
      lastName: 'Day',
      email: 'benday@benday.com',
      status: 'active',
      favoriteNumber: '42'});
  }
}
