import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-form1',
  templateUrl: './input-form1.component.html',
  styleUrls: ['./input-form1.component.css']
})
export class InputForm1Component {

  theForm = this.fb.nonNullable.group({
    firstName: [''],
    lastName: [''],
    email: [''],
  });

  constructor(
    private fb: FormBuilder
  ) {

  }

  save() {
    console.log(this.theForm.value);
  }
}
