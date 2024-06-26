import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AlimentacionComponent } from './alimentacion/alimentacion/alimentacion.component';
import { CrearPlanNutricionalComponent } from './alimentacion/crear-plan-nutricional/crear-plan-nutricional.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'alimentacion', component: AlimentacionComponent },
  {path: 'crear-plan-nutricional', component: CrearPlanNutricionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
