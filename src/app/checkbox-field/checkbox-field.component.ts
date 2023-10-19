import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css']
})
export class CheckboxFieldComponent {
  @Input()
  parentForm!: FormGroup;
  
  @Input()
  controlName!: string;

  @Input()
  displayName = '(displayName not set)';

  @Output() 
  valueChanged = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectionChanged(event: Event) {
    this.valueChanged?.emit(this.parentForm.get(this.controlName)?.value);
  }
}
