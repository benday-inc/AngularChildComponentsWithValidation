import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxFieldComponent } from './combobox-field.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ComboboxFieldComponent', () => {
  let component: ComboboxFieldComponent;
  let fixture: ComponentFixture<ComboboxFieldComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboboxFieldComponent],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [ { provide: FormGroup, useValue: new FormBuilder().group } ]
    });
    fixture = TestBed.createComponent(ComboboxFieldComponent);
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
