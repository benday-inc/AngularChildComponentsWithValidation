import { Component, Input } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-textbox-field',
  templateUrl: './textbox-field.component.html',
  styleUrls: ['./textbox-field.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class TextboxFieldComponent {
  @Input()
  parentForm!: FormGroup;
  
  @Input()
  controlName!: string;

  constructor() {
    
  }

  ngOnInit(): void {
  }
}
