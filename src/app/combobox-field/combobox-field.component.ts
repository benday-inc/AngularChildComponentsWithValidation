import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyValuePair } from '../key-value-pair';

@Component({
  selector: 'app-combobox-field',
  templateUrl: './combobox-field.component.html',
  styleUrls: ['./combobox-field.component.css']
})
export class ComboboxFieldComponent {
  @Input()
  parentForm!: FormGroup;
  
  @Input()
  controlName!: string;

  @Input()
  displayName = '(displayName not set)';

  @Output() 
  selectedValueChanged = new EventEmitter();
  

  public availableValues: KeyValuePair[] = [];

  public addAvailableValue(key: string, value: string) {
    const temp = new KeyValuePair();

    temp.key = value;
    temp.value = value;

    this.availableValues.push(temp);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectionChanged(event: Event) {
    this.selectedValueChanged?.emit(this.parentForm.get(this.controlName)?.value);
  }
}
