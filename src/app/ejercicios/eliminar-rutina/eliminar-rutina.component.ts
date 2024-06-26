import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RutinaService } from '../../services/rutinas-ejercicios.service';

@Component({
  selector: 'app-eliminar-rutina',
  templateUrl: './eliminar-rutina.component.html',
  styleUrls: ['./eliminar-rutina.component.css']
})
export class EliminarRutinaComponent implements OnInit {
  userRoutines: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private rutinaService: RutinaService
  ) { }

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

  deleteRoutine(routine: any): void {
    if (routine && routine.id) {
      this.rutinaService.deleteRutina(routine.id).subscribe(
        () => {
          const index = this.userRoutines.indexOf(routine);
          if (index >= 0) {
            this.userRoutines.splice(index, 1);
            this.snackBar.open('Rutina eliminada', 'Cerrar', {
              duration: 2000,
            });
          }
        },
        error => {
          console.error('Error al eliminar la rutina', error);
          this.snackBar.open('Error al eliminar la rutina', 'Cerrar', {
            duration: 2000,
          });
        }
      );
    }
  }
}
