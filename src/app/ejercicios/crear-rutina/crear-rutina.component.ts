import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crear-rutina.component.html',
  styleUrls: ['./crear-rutina.component.css']
})
export class CrearRutinaComponent implements OnInit {
  routineForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      console.log(this.routineForm.value);
      // Aquí puedes añadir la lógica para enviar los datos al backend
    }
  }
}
