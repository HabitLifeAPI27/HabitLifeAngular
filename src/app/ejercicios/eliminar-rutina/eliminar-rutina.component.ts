import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar-rutina',
  templateUrl: './eliminar-rutina.component.html',
  styleUrls: ['./eliminar-rutina.component.css']
})
export class EliminarRutinaComponent implements OnInit {
  userRoutines: any[] = [
    { id: 1, name: 'Rutina de Ejercicio 1' },
    { id: 2, name: 'Rutina de Ejercicio 2' },
    { id: 3, name: 'Rutina de Ejercicio 3' }
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  deleteRoutine(routine: any): void {
    const index = this.userRoutines.indexOf(routine);
    if (index >= 0) {
      this.userRoutines.splice(index, 1);
      this.snackBar.open('Rutina eliminada', 'Cerrar', {
        duration: 2000,
      });
    }
  }
}
