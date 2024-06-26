import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {
  routines = [
    { name: 'Rutina 1' },
    { name: 'Rutina 2' },
    { name: 'Rutina 3' },
  ];

  createRoutine() {
    // Lógica para crear rutina
  }

  editRoutine() {
    // Lógica para editar rutina
  }

  deleteRoutine() {
    // Lógica para eliminar rutina
  }

  goToAnotherSection() {
    // Navegar a otra sección
  }
}
