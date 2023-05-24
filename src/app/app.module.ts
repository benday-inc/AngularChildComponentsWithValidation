import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputForm1Component } from './input-form1/input-form1.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageDisplayComponent } from './validation-message-display/validation-message-display.component';
import { TextboxFieldComponent } from './textbox-field/textbox-field.component';
import { ComboboxFieldComponent } from './combobox-field/combobox-field.component';

@NgModule({
  declarations: [
    AppComponent,
    InputForm1Component,
    LandingPageComponent,
    ValidationMessageDisplayComponent,
    TextboxFieldComponent,
    ComboboxFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
