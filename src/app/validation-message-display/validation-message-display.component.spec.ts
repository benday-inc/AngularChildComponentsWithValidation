import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMessageDisplayComponent } from './validation-message-display.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ValidationMessageDisplayComponent', () => {
  let component: ValidationMessageDisplayComponent;
  let fixture: ComponentFixture<ValidationMessageDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationMessageDisplayComponent],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(ValidationMessageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
