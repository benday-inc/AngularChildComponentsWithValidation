import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextboxFieldComponent } from '../textbox-field/textbox-field.component';
import { ComboboxFieldComponent } from '../combobox-field/combobox-field.component';

@Component({
  selector: 'app-input-form1',
  templateUrl: './input-form1.component.html',
  styleUrls: ['./input-form1.component.css']
})
export class InputForm1Component {
  @ViewChild(TextboxFieldComponent, { static: true })
  public textbox: TextboxFieldComponent | null = null;

  @ViewChild(ComboboxFieldComponent, { static: true })
  public combobox1: ComboboxFieldComponent | null = null;

  theForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', {
      validators: [Validators.required, Validators.email]
    }],
    status: ['', Validators.required],
    leastFavoriteNumber: this.fb.nonNullable.control<number>(0, {
      validators: [Validators.required,
      Validators.pattern('^-?[0-9]+(.[0-9]*)?$')]
    }),
    favoriteNumber: ['', {
      validators: [Validators.required,
      Validators.pattern('^-?[0-9]+(.[0-9]*)?$')]
    }],
    textbox1: ['', Validators.required],
    textbox2: ['', Validators.required],
    combobox1: ['', Validators.required],
  });


  constructor(
    private fb: FormBuilder
  ) {

  }

  save() {
    console.log(this.theForm?.value);
  }

  toggleDisabledFields() {
    if (this.theForm === null) {
      return;
    }

    this.toggleField(this.theForm.controls.firstName);
    this.toggleField(this.theForm.controls.textbox1);
  }

  toggleField(control: FormControl) {
    if (control.disabled === true) {
      control.enable()
    }
    else {
      control.disable()
    }
  }

  addComboboxOption() {
    if (this.combobox1 !== null) {
      const now = new Date()
      const seconds = now.getSeconds();
      this.combobox1.addAvailableValue(`test-${seconds}`, `test option ${seconds}`);
    }
  }

  getValidationSummary() {
    const untypedForm = (this.theForm as FormGroup);

    Object.keys(untypedForm.controls).forEach(key => {
      const control = untypedForm.controls[key];
      if (control.enabled === true && control.valid === false) {
        console.log(`invalid control ${key}: ${JSON.stringify(control.errors)}`);
      }
    });
  }

  populateWithData(allData: boolean) {

    if (allData === true) {
      this.theForm?.patchValue({
        firstName: 'Ben',
        lastName: 'Day',
        email: 'benday@benday.com',
        status: 'active',
        favoriteNumber: '42',
        leastFavoriteNumber: 13,
        textbox1: 'Hello, world!',
        textbox2: "What's shaking?"
      });
    } else {
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
}
