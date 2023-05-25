import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextboxFieldComponent } from '../textbox-field/textbox-field.component';
import { ComboboxFieldComponent } from '../combobox-field/combobox-field.component';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  @ViewChild(TextboxFieldComponent, { static: true })
  public textbox: TextboxFieldComponent | null = null;

  @ViewChild(ComboboxFieldComponent, { static: true })
  public combobox1: ComboboxFieldComponent | null = null;

  comboboxChangeMessage = '(no changes yet)';

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

  ngOnInit(): void {
    this.combobox1?.selectedValueChanged.subscribe((val) => {
      this.comboboxChangeMessage = `combobox1 changed to ${val}`;
    });
  }

  save() {
    console.log(this.theForm?.value);
  }

  toggleFirstNameField() {
    if (this.theForm === null) {
      return;
    }

    this.toggleField(this.theForm.controls.firstName);
  }

  toggleTextbox1Field() {
    if (this.theForm === null) {
      return;
    }

    this.toggleField(this.theForm.controls.textbox1);
  }

  private toggleField(control: FormControl) {
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
      this.addComboboxOption();
      this.addComboboxOption();
      this.addComboboxOption();
      
      const comboxBoxValue = this.combobox1?.availableValues[1];

      this.theForm?.patchValue({
        firstName: 'Ben',
        lastName: 'Day',
        email: 'benday@benday.com',
        status: 'active',
        favoriteNumber: '42',
        leastFavoriteNumber: 13,
        textbox1: 'Hello, world!',
        textbox2: "What's shaking?",
        combobox1: comboxBoxValue?.key
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
