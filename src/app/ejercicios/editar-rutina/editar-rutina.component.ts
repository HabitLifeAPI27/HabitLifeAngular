import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutinaService } from '../../services/rutinas-ejercicios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-rutina',
  templateUrl: './editar-rutina.component.html',
  styleUrls: ['./editar-rutina.component.css']
})
export class EditarRutinaComponent implements OnInit {
  editRoutineForm: FormGroup;
  userRoutines: any[] = [];

  constructor(
    private fb: FormBuilder,
    private rutinaService: RutinaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editRoutineForm = this.fb.group({
      routineName: ['', Validators.required],
      description: ['', Validators.required],
      numSeries: ['', Validators.required],
      numRepetitions: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadRutinas();
  }

  loadRutinas(): void {
    this.rutinaService.getAllRutinas().subscribe(
      data => {
        this.userRoutines = data;
      },
      error => {
        console.error('Error al cargar rutinas', error);
      }
    );
  }

  selectRoutine(routine: any): void {
    this.editRoutineForm.patchValue({
      routineName: routine.nombre,
      description: routine.descripcion,
      numSeries: routine.series,
      numRepetitions: routine.repeticiones,
      startDate: routine.fechaInicio,
      endDate: routine.fechaFin,
    });
  }

  onSubmit(): void {
    if (this.editRoutineForm.valid) {
      const selectedRoutineId = this.route.snapshot.paramMap.get('id'); // assuming you pass the id in the URL
      if (selectedRoutineId) {
        this.rutinaService.updateRutina(parseInt(selectedRoutineId, 10), this.editRoutineForm.value).subscribe(
          response => {
            console.log('Rutina actualizada exitosamente', response);
            this.router.navigate(['/ruta-a-donde-redirigir-despues-de-actualizar']);
          },
          error => {
            console.error('Error al actualizar la rutina', error);
          }
        );
      }
    }
  }
}
