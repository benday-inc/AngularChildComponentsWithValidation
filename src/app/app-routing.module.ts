import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputForm1Component } from './input-form1/input-form1.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'form1', component: InputForm1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // add routes here


}
