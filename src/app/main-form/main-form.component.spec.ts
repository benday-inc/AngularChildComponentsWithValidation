import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainFormComponent } from './main-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextboxFieldComponent } from '../textbox-field/textbox-field.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainFormComponent', () => {
  let component: MainFormComponent;
  let fixture: ComponentFixture<MainFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFormComponent],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
      // imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(MainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
