import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainFormComponent } from './main-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TextboxFieldComponent } from '../textbox-field/textbox-field.component';
import { ComboboxFieldComponent } from '../combobox-field/combobox-field.component';
import { ValidationMessageDisplayComponent } from '../validation-message-display/validation-message-display.component';

describe('MainFormComponent', () => {
  let component: MainFormComponent;
  let fixture: ComponentFixture<MainFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFormComponent,
        TextboxFieldComponent,
        ComboboxFieldComponent,
        ValidationMessageDisplayComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(MainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
