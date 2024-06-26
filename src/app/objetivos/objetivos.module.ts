import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { CrearObjetivosComponent } from './crear-objetivos/crear-objetivos.component';
import { EditarObjetivosComponent } from './editar-objetivos/editar-objetivos.component';
import { EliminarObjetivosComponent } from './eliminar-objetivos/eliminar-objetivos.component';
import { ObjetivoService } from '../services/objetivos.service';



@NgModule({
  declarations: [
    ObjetivosComponent,
    CrearObjetivosComponent,
    EditarObjetivosComponent,
    EliminarObjetivosComponent
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
  providers: [ObjetivoService],
})
export class ObjetivosModule { }
