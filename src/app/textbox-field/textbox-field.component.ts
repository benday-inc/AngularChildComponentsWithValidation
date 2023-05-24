import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textbox-field',
  templateUrl: './textbox-field.component.html',
  styleUrls: ['./textbox-field.component.css']
})
export class TextboxFieldComponent {
  public theFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.theFormGroup = this.formBuilder.nonNullable.group({
      textbox1: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public createFormGroup(): FormGroup {
    console.log('TextboxFieldComponent.createFormGroup');
    const temp = this.theFormGroup;    
    return temp;
  }
}
