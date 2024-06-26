import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentacionComponent } from './alimentacion/alimentacion.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AlimentacionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
  ]
})
export class AlimentacionModule { }
