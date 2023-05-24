import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextboxFieldComponent } from '../textbox-field/textbox-field.component';

@Component({
  selector: 'app-input-form1',
  templateUrl: './input-form1.component.html',
  styleUrls: ['./input-form1.component.css']
})
export class InputForm1Component {
  @ViewChild(TextboxFieldComponent, { static: true })
  public textbox: TextboxFieldComponent | null = null;

  theForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', {
      validators: [Validators.required, Validators.email]
    }],
    status: ['', Validators.required],
    leastFavoriteNumber: this.fb.nonNullable.control<number>(0, {
      validators: [Validators.required,
      Validators.pattern('^-?[0-9]+(\.[0-9]*)?$')]
    }),
    favoriteNumber: ['', {
      validators: [Validators.required,
      Validators.pattern('^-?[0-9]+(\.[0-9]*)?$')]           
    }],
    textboxGroup1: this.textbox?.createFormGroup(),
  });

  constructor(
    private fb: FormBuilder
  ) {
    
  }

  public ngOnInit(): void {
    this.theForm.patchValue({
      textboxGroup1: this.textbox?.createFormGroup()
    });

    this.textbox!.theFormGroup.setParent(this.theForm);
  }

  save() {
    console.log(this.textbox);
    console.log(this.theForm?.value);
  }

  populateWithData() {
    this.theForm?.patchValue({
      firstName: 'Ben',
      lastName: 'Day',
      email: 'benday@benday.com',
      status: 'active',
      favoriteNumber: '42',
      leastFavoriteNumber: 13
    });
  }
}
