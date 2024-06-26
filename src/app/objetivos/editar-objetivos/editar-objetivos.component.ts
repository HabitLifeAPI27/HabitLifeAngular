import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjetivoService } from '../../services/objetivos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-objetivo',
  templateUrl: './editar-objetivos.component.html',
  styleUrls: ['./editar-objetivos.component.css']
})
export class EditarObjetivosComponent implements OnInit {
  editGoalForm: FormGroup;
  userGoals: any[] = [];

  constructor(
    private fb: FormBuilder,
    private objetivosService: ObjetivoService,
    private snackBar: MatSnackBar
  ) {
    this.editGoalForm = this.fb.group({
      goalName: ['', Validators.required],
      description: ['', Validators.required],
      goalType: ['', Validators.required],
      status: ['', Validators.required],
      frequency: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerObjetivos();
  }

  obtenerObjetivos(): void {
    this.objetivosService.obtenerObjetivos().subscribe(
      (response) => {
        this.userGoals = response;
      },
      (error) => {
        console.error('Error al obtener los objetivos', error);
      }
    );
  }

  selectGoal(goal: any): void {
    this.editGoalForm.patchValue({
      goalName: goal.nombre,
      description: goal.descripcion,
      goalType: goal.tipoObjetivo,
      status: goal.estadoObjetivo,
      frequency: goal.frecuencia,
      startDate: goal.fechaInicio,
      endDate: goal.fechaFin,
    });
  }

  onSubmit(): void {
    if (this.editGoalForm.valid) {
      const objetivo = {
        usuarioId: 2,  // Aquí deberías pasar el ID del usuario correspondiente
        nombre: this.editGoalForm.value.goalName,
        tipoObjetivo: this.editGoalForm.value.goalType,
        descripcion: this.editGoalForm.value.description,
        estadoObjetivo: this.editGoalForm.value.status,
        fechaInicio: this.editGoalForm.value.startDate,
        fechaFin: this.editGoalForm.value.endDate,
        frecuencia: this.editGoalForm.value.frequency
      };

      const objetivoId = this.userGoals.find(goal => goal.nombre === this.editGoalForm.value.goalName).id;

      this.objetivosService.editarObjetivo(objetivoId, objetivo).subscribe(
        response => {
          console.log('Objetivo editado exitosamente', response);
          this.snackBar.open('Objetivo editado exitosamente', 'Cerrar', {
            duration: 2000,
          });
        },
        error => {
          console.error('Error al editar el objetivo', error);
          this.snackBar.open('Error al editar el objetivo', 'Cerrar', {
            duration: 2000,
          });
        }
      );
    }
  }
}
