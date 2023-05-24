import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMessageDisplayComponent } from './validation-message-display.component';

describe('ValidationMessageDisplayComponent', () => {
  let component: ValidationMessageDisplayComponent;
  let fixture: ComponentFixture<ValidationMessageDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationMessageDisplayComponent]
    });
    fixture = TestBed.createComponent(ValidationMessageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
