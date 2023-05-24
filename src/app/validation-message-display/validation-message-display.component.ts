import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message-display',
  templateUrl: './validation-message-display.component.html',
  styleUrls: ['./validation-message-display.component.css']
})
export class ValidationMessageDisplayComponent {
  @Input() controlToValidate: FormControl<string> | null = null;
  @Input() controlDisplayName: string = '(control display name not set)';
  
}
