import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanNutricionalService } from '../../services/plan-nutricional.service';

@Component({
  selector: 'app-editar-plan-nutricional',
  templateUrl: './editar-plan-nutricional.component.html',
  styleUrls: ['./editar-plan-nutricional.component.css']
})
export class EditarPlanNutricionalComponent implements OnInit {
  editPlanForm: FormGroup;
  foods: string[] = ['Manzanas', 'Bananas', 'Zanahorias', 'Espinacas', 'Pollo', 'Pescado', 'Arroz', 'Frijoles'];
  userPlans: any[] = [];
  selectedPlanId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private planNutricionalService: PlanNutricionalService
  ) {
    this.editPlanForm = this.fb.group({
      planName: ['', Validators.required],
      description: ['', Validators.required],
      requiredFoods: [[], Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

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

  selectPlan(plan: any): void {
    this.selectedPlanId = plan.id;
    this.editPlanForm.patchValue({
      planName: plan.nombre,
      description: plan.descripcion,
      requiredFoods: plan.alimentos.split(', '),
      startDate: plan.fechaInicio,
      endDate: plan.fechaFin,
    });
  }

  onSubmit(): void {
    if (this.editPlanForm.valid && this.selectedPlanId !== null) {
      const planData = {
        tipoUsuario: 'PROFESIONAL',
        profesionalId: 1,
        nombre: this.editPlanForm.value.planName,
        descripcion: this.editPlanForm.value.description,
        fechaInicio: this.editPlanForm.value.startDate,
        fechaFin: this.editPlanForm.value.endDate,
        alimentos: this.editPlanForm.value.requiredFoods.join(', ')
      };

      this.planNutricionalService.actualizarPlanNutricional(this.selectedPlanId, planData).subscribe(
        response => {
          console.log('Plan actualizado exitosamente', response);
          this.cargarPlanes(); // Recargar los planes después de la actualización
        },
        error => {
          console.error('Error al actualizar el plan', error);
        }
      );
    }
  }
}
