import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainFormComponent } from './main-form/main-form.component';

const routes: Routes = [
  { path: '', component: MainFormComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'form1', component: MainFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
