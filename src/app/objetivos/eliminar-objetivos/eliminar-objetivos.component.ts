import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ObjetivoService } from '../../services/objetivos.service';

@Component({
  selector: 'app-eliminar-objetivos',
  templateUrl: './eliminar-objetivos.component.html',
  styleUrls: ['./eliminar-objetivos.component.css']
})
export class EliminarObjetivosComponent implements OnInit {
  userGoals: any[] = [];

  constructor(private snackBar: MatSnackBar, private objetivoService: ObjetivoService) { }

  ngOnInit(): void {
    this.loadObjetivos();
  }

  loadObjetivos(): void {
    this.objetivoService.getAllObjetivos().subscribe(
      (goals) => {
        this.userGoals = goals;
      },
      (error) => {
        this.snackBar.open('Error al cargar los objetivos', 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }

  deleteGoal(goal: any): void {
    this.objetivoService.deleteObjetivo(goal.id).subscribe(
      () => {
        const index = this.userGoals.indexOf(goal);
        if (index >= 0) {
          this.userGoals.splice(index, 1);
          this.snackBar.open('Objetivo eliminado', 'Cerrar', {
            duration: 2000,
          });
        }
      },
      (error) => {
        this.snackBar.open('Error al eliminar el objetivo', 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }
}
