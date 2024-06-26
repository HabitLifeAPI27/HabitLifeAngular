import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-plan-nutricional',
  templateUrl: './crear-plan-nutricional.component.html',
  styleUrls: ['./crear-plan-nutricional.component.css']
})
export class CrearPlanNutricionalComponent implements OnInit {
  planForm: FormGroup;
  foods: string[] = ['Manzanas', 'Plátanos', 'Zanahorias', 'Pollo', 'Pescado', 'Arroz', 'Leche', 'Huevos', 'Verduras', 'Menestras'];

  constructor(private fb: FormBuilder) {
    this.planForm = this.fb.group({
      planName: ['', Validators.required],
      description: ['', Validators.required],
      requiredFoods: [[], Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.planForm.valid) {
      console.log(this.planForm.value);
      // Aquí puedes añadir la lógica para enviar los datos al backend
    }
  }
}
