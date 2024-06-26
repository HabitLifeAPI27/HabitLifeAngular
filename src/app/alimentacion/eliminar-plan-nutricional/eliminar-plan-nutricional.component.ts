import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlanNutricionalService } from '../../services/plan-nutricional.service';

@Component({
  selector: 'app-eliminar-plan-nutricional',
  templateUrl: './eliminar-plan-nutricional.component.html',
  styleUrls: ['./eliminar-plan-nutricional.component.css']
})
export class EliminarPlanNutricionalComponent implements OnInit {
  userPlans: any[] = [];

  constructor(
    private planNutricionalService: PlanNutricionalService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cargarPlanes();
  }

  cargarPlanes(): void {
    this.planNutricionalService.obtenerTodosLosPlanes().subscribe(
      planes => {
        this.userPlans = planes;
      },
      error => {
        console.error('Error al cargar los planes', error);
      }
    );
  }

  deletePlan(plan: any): void {
    this.planNutricionalService.eliminarPlanNutricional(plan.id).subscribe(
      () => {
        this.userPlans = this.userPlans.filter(p => p.id !== plan.id);
        this.snackBar.open('Plan eliminado', 'Cerrar', {
          duration: 2000,
        });
      },
      error => {
        console.error('Error al eliminar el plan', error);
        this.snackBar.open('Error al eliminar el plan', 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }
}
