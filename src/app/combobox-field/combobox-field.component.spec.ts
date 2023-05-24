import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxFieldComponent } from './combobox-field.component';

describe('ComboboxFieldComponent', () => {
  let component: ComboboxFieldComponent;
  let fixture: ComponentFixture<ComboboxFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboboxFieldComponent]
    });
    fixture = TestBed.createComponent(ComboboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
