import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxFieldComponent } from './textbox-field.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('TextboxFieldComponent', () => {
  let component: TextboxFieldComponent;
  let fixture: ComponentFixture<TextboxFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextboxFieldComponent],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [ { provide: FormBuilder, useValue: new FormBuilder() } ]
    });
    fixture = TestBed.createComponent(TextboxFieldComponent);
    component = fixture.componentInstance;
    component.controlName = 'testField';
    component.parentForm = new FormGroup({
      testField: new FormControl('', Validators.required)
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
