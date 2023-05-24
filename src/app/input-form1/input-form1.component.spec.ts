import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputForm1Component } from './input-form1.component';

describe('InputForm1Component', () => {
  let component: InputForm1Component;
  let fixture: ComponentFixture<InputForm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputForm1Component]
    });
    fixture = TestBed.createComponent(InputForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
