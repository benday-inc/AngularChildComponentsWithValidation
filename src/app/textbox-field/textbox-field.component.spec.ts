import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxFieldComponent } from './textbox-field.component';

describe('TextboxFieldComponent', () => {
  let component: TextboxFieldComponent;
  let fixture: ComponentFixture<TextboxFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextboxFieldComponent]
    });
    fixture = TestBed.createComponent(TextboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
