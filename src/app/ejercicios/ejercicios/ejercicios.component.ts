import { RutinaService } from './../../services/rutinas-ejercicios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  routines: any[] = [];
  selectedRoutine: any;

  constructor(private RutinaService: RutinaService) { }

  ngOnInit(): void {
    this.loadRoutines();
  }

  loadRoutines(): void {
    this.RutinaService.getRoutines().subscribe(
      (data) => {
        this.routines = data;
      },
      (error) => {
        console.error('Error al cargar las rutinas', error);
      }
    );
  }

  selectRoutine(routine: any): void {
    this.selectedRoutine = routine;
  }

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
