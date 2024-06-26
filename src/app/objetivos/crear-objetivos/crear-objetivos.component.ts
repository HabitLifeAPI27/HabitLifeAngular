import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjetivoService } from '../../services/objetivos.service';

@Component({
  selector: 'app-crear-objetivo',
  templateUrl: './crear-objetivos.component.html',
  styleUrls: ['./crear-objetivos.component.css']
})
export class CrearObjetivosComponent implements OnInit {
  goalForm: FormGroup;

  constructor(private fb: FormBuilder, private objetivosService: ObjetivoService) {
    this.goalForm = this.fb.group({
      goalName: ['', Validators.required],
      description: ['', Validators.required],
      goalType: ['', Validators.required],
      status: ['', Validators.required],
      frequency: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.goalForm.valid) {
      const objetivo = {
        usuarioId: 2,  // Aquí deberías pasar el ID del usuario correspondiente
        nombre: this.goalForm.value.goalName,
        tipoObjetivo: this.goalForm.value.goalType,
        descripcion: this.goalForm.value.description,
        estadoObjetivo: this.goalForm.value.status,
        fechaInicio: this.goalForm.value.startDate,
        fechaFin: this.goalForm.value.endDate,
        frecuencia: this.goalForm.value.frequency
      };

      this.objetivosService.crearObjetivo(objetivo).subscribe(
        response => {
          console.log('Objetivo creado exitosamente', response);
        },
        error => {
          console.error('Error al crear el objetivo', error);
        }
      );
    }
  }
}
