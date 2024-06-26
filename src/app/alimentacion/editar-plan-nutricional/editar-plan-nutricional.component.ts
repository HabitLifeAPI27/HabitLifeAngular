import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-plan-nutricional',
  templateUrl: './editar-plan-nutricional.component.html',
  styleUrls: ['./editar-plan-nutricional.component.css']
})
export class EditarPlanNutricionalComponent implements OnInit {
  editPlanForm: FormGroup;
  foods: string[] = ['Manzanas', 'Bananas', 'Zanahorias', 'Espinacas', 'Pollo', 'Pescado', 'Arroz', 'Frijoles'];
  userPlans: any[] = [
    {
      name: 'Plan Nutricional 1',
      description: 'Descripción del plan 1',
      requiredFoods: ['Manzanas', 'Pollo'],
      startDate: new Date(),
      endDate: new Date()
    },
    {
      name: 'Plan Nutricional 2',
      description: 'Descripción del plan 2',
      requiredFoods: ['Bananas', 'Pescado'],
      startDate: new Date(),
      endDate: new Date()
    },
    {
      name: 'Plan Nutricional 3',
      description: 'Descripción del plan 3',
      requiredFoods: ['Zanahorias', 'Arroz'],
      startDate: new Date(),
      endDate: new Date()
    }
  ];

  constructor(private fb: FormBuilder) {
    this.editPlanForm = this.fb.group({
      planName: ['', Validators.required],
      description: ['', Validators.required],
      requiredFoods: [[], Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  selectPlan(plan: any): void {
    this.editPlanForm.patchValue({
      planName: plan.name,
      description: plan.description,
      requiredFoods: plan.requiredFoods,
      startDate: plan.startDate,
      endDate: plan.endDate,
    });
  }

  onSubmit(): void {
    if (this.editPlanForm.valid) {
      console.log(this.editPlanForm.value);
      // Aquí puedes agregar la lógica para enviar los datos al backend
    }
  }
}
