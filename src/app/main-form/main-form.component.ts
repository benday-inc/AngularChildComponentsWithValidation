import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextboxFieldComponent } from '../textbox-field/textbox-field.component';
import { ComboboxFieldComponent } from '../combobox-field/combobox-field.component';
import { CheckboxFieldComponent } from '../checkbox-field/checkbox-field.component';
import { KeyValuePair } from '../key-value-pair';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  @ViewChild('textbox1', { static: true })
  public textbox: TextboxFieldComponent | null = null;

  @ViewChild(ComboboxFieldComponent, { static: true })
  public combobox1: ComboboxFieldComponent | null = null;

  @ViewChild(CheckboxFieldComponent, { static: true })
  public checkbox1: CheckboxFieldComponent | null = null;

  comboboxChangeMessage = '(no changes yet)';
  saveOutput = '(save not clicked yet)';
  validationSummary = '(no validation summary yet)';

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
    comboboxWithItemSource: ['2', Validators.required],
    checkbox1: [true, Validators.required],
    checkbox2: [false, Validators.required],
  });


  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.combobox1?.selectedValueChanged.subscribe((val) => {
      this.comboboxChangeMessage = `combobox1 changed to ${val}`;
    });

    this.textbox?.changed.subscribe((val) => {
      const message = `textbox1 changed to ${val}`;
      this.theForm.patchValue({
        textbox2: message
      });
    });
  }

  save() {
    console.log(this.theForm?.value);
    this.saveOutput = JSON.stringify(this.theForm?.value).replace(/,/g, ',\r\n');
  }

  reset() {
    this.theForm?.patchValue({
      firstName: '',
      lastName: '',
      email: '',
      status: '',
      favoriteNumber: '',
      leastFavoriteNumber: 0,
      textbox1: '',
      textbox2: "",
      combobox1: ''
    });

    this.validationSummary = '(no validation summary yet)';
    this.saveOutput = '(save not clicked yet)';
  }

  checkbox1Changed($event: any) {
    console.log(`checkbox1 changed to ${$event}`);
    const checkbox1Value = this.theForm.controls.checkbox1.value;
    this.theForm.controls.checkbox2.setValue(!checkbox1Value);
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

    let message = '';

    Object.keys(untypedForm.controls).forEach(key => {
      const control = untypedForm.controls[key];
      if (control.enabled === true && control.valid === false) {
        console.log(`invalid control ${key}: ${JSON.stringify(control.errors)}`);
        message += `${key}: ${JSON.stringify(control.errors)}\r\n`;
      }
    });

    this.validationSummary = message;
  }

  getAvailableValues(): KeyValuePair[] {
    const returnValue: KeyValuePair[] = [];

    returnValue.push({ key: '1', value: 'One' });
    returnValue.push({ key: '2', value: 'Two' });
    returnValue.push({ key: '3', value: 'Three' });
    returnValue.push({ key: '4', value: 'Four' });

    return returnValue;
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
