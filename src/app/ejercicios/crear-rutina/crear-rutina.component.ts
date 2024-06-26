import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutinaService } from '../../services/rutinas-ejercicios.service';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.css']
})
export class CrearRutinaComponent implements OnInit {
  routineForm: FormGroup;

  constructor(private fb: FormBuilder, private rutinaService: RutinaService) {
    this.routineForm = this.fb.group({
      routineName: ['', Validators.required],
      description: ['', Validators.required],
      numSeries: ['', Validators.required],
      numRepetitions: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.routineForm.valid) {
      const formValues = this.routineForm.value;
      const rutina = {
        tipoUsuario: 'USUARIO',
        usuarioId: 2, // Cambia esto por el ID del usuario actual
        profesionalId: null,
        nombre: formValues.routineName,
        descripcion: formValues.description,
        fechaInicio: formValues.startDate,
        fechaFin: formValues.endDate,
        series: formValues.numSeries,
        repeticiones: formValues.numRepetitions
      };

      this.rutinaService.createRutina(rutina).subscribe(
        response => {
          console.log('Rutina creada exitosamente', response);
          // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al crear la rutina', error);
        }
      );
    }
  }
}
