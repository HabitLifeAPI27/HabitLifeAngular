import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CrearRutinaComponent } from './crear-rutina/crear-rutina.component';
import { EditarRutinaComponent } from './editar-rutina/editar-rutina.component';
import { EliminarRutinaComponent } from './eliminar-rutina/eliminar-rutina.component';
import { RutinaService } from '../services/rutinas-ejercicios.service';

@NgModule({
  declarations: [EjerciciosComponent,
    CrearRutinaComponent,
    EditarRutinaComponent,
    EliminarRutinaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule
  ],
  providers: [RutinaService],
  exports: []
})
export class EjercicioModule { }
