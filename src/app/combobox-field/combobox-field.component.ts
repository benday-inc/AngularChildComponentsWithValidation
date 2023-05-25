import { Component, Input } from '@angular/core';
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

  public availableValues: KeyValuePair[] = [];

  public addAvailableValue(key: string, value: string) {
    const temp = new KeyValuePair();

    temp.key = value;
    temp.value = value;

    this.availableValues.push(temp);
  }
}
