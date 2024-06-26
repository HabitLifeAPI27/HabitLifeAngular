import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-rutina',
  templateUrl: './editar-rutina.component.html',
  styleUrls: ['./editar-rutina.component.css']
})
export class EditarRutinaComponent implements OnInit {
  editRoutineForm: FormGroup;
  userRoutines: any[] = [
    {
      name: 'Rutina de Ejercicio 1',
      description: 'Descripción de la rutina 1',
      numSeries: 3,
      numRepetitions: 12,
      startDate: new Date(),
      endDate: new Date()
    },
    {
      name: 'Rutina de Ejercicio 2',
      description: 'Descripción de la rutina 2',
      numSeries: 4,
      numRepetitions: 10,
      startDate: new Date(),
      endDate: new Date()
    },
    {
      name: 'Rutina de Ejercicio 3',
      description: 'Descripción de la rutina 3',
      numSeries: 5,
      numRepetitions: 8,
      startDate: new Date(),
      endDate: new Date()
    }
  ];

  constructor(private fb: FormBuilder) {
    this.editRoutineForm = this.fb.group({
      routineName: ['', Validators.required],
      description: ['', Validators.required],
      numSeries: ['', Validators.required],
      numRepetitions: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  selectRoutine(routine: any): void {
    this.editRoutineForm.patchValue({
      routineName: routine.name,
      description: routine.description,
      numSeries: routine.numSeries,
      numRepetitions: routine.numRepetitions,
      startDate: routine.startDate,
      endDate: routine.endDate,
    });
  }

  onSubmit(): void {
    if (this.editRoutineForm.valid) {
      console.log(this.editRoutineForm.value);
      // Aquí puedes agregar la lógica para enviar los datos al backend
    }
  }
}
