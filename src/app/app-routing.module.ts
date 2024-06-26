import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AlimentacionComponent } from './alimentacion/alimentacion/alimentacion.component';
import { CrearPlanNutricionalComponent } from './alimentacion/crear-plan-nutricional/crear-plan-nutricional.component';
import { EditarPlanNutricionalComponent } from './alimentacion/editar-plan-nutricional/editar-plan-nutricional.component';
import { EliminarPlanNutricionalComponent } from './alimentacion/eliminar-plan-nutricional/eliminar-plan-nutricional.component';
import { EjerciciosComponent } from './ejercicios/ejercicios/ejercicios.component';
import { CrearRutinaComponent } from './ejercicios/crear-rutina/crear-rutina.component';
import { EditarRutinaComponent } from './ejercicios/editar-rutina/editar-rutina.component';
import { EliminarRutinaComponent } from './ejercicios/eliminar-rutina/eliminar-rutina.component';
import { ObjetivosComponent } from './objetivos/objetivos/objetivos.component';
import { CrearObjetivosComponent } from './objetivos/crear-objetivos/crear-objetivos.component';
import { EditarObjetivosComponent } from './objetivos/editar-objetivos/editar-objetivos.component';
import { EliminarObjetivosComponent } from './objetivos/eliminar-objetivos/eliminar-objetivos.component';

const routes: Routes = [
  {path: 'landing-page', component: LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'alimentacion', component: AlimentacionComponent },
  {path: 'crear-plan-nutricional', component: CrearPlanNutricionalComponent},
  { path: 'editar-plan-nutricional', component: EditarPlanNutricionalComponent},
  {path: 'eliminar-plan-nutricional', component: EliminarPlanNutricionalComponent},
  {path: 'ejercicios', component: EjerciciosComponent},
  {path: 'crear-rutina', component: CrearRutinaComponent},
  {path: 'editar-rutina', component: EditarRutinaComponent},
  {path: 'eliminar-rutina', component: EliminarRutinaComponent},
  {path: 'objetivos', component: ObjetivosComponent},
  {path: 'crear-objetivos', component: CrearObjetivosComponent},
  {path: 'editar-objetivos', component: EditarObjetivosComponent},
  {path: 'eliminar-objetivos', component: EliminarObjetivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
