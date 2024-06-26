import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { SharedModule } from '../shared/shared.module';
import { CrearPlanNutricionalComponent } from './crear-plan-nutricional/crear-plan-nutricional.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { EditarPlanNutricionalComponent } from './editar-plan-nutricional/editar-plan-nutricional.component';
import { EliminarPlanNutricionalComponent } from './eliminar-plan-nutricional/eliminar-plan-nutricional.component';
import { PlanNutricionalService } from '../services/plan-nutricional.service';



@NgModule({
  declarations: [
    AlimentacionComponent,
    CrearPlanNutricionalComponent,
    EditarPlanNutricionalComponent,
    EliminarPlanNutricionalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [PlanNutricionalService],
  exports: [
  ]
})
export class AlimentacionModule { }
