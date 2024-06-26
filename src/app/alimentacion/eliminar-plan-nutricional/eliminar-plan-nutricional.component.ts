import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar-plan-nutricional',
  templateUrl: './eliminar-plan-nutricional.component.html',
  styleUrls: ['./eliminar-plan-nutricional.component.css']
})
export class EliminarPlanNutricionalComponent implements OnInit {
  userPlans: any[] = [
    { id: 1, name: 'Plan Nutricional 1' },
    { id: 2, name: 'Plan Nutricional 2' },
    { id: 3, name: 'Plan Nutricional 3' }
  ];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  deletePlan(plan: any): void {
    const index = this.userPlans.indexOf(plan);
    if (index >= 0) {
      this.userPlans.splice(index, 1);
      this.snackBar.open('Plan eliminado', 'Cerrar', {
        duration: 2000,
      });
    }
  }
}
