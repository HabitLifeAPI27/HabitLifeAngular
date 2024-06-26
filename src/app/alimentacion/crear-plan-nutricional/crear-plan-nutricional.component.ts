import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanNutricionalService } from '../../services/plan-nutricional.service';

@Component({
  selector: 'app-crear-plan-nutricional',
  templateUrl: './crear-plan-nutricional.component.html',
  styleUrls: ['./crear-plan-nutricional.component.css']
})
export class CrearPlanNutricionalComponent implements OnInit {
  planForm: FormGroup;
  foods: string[] = ['Manzanas', 'Plátanos', 'Zanahorias', 'Pollo', 'Pescado', 'Arroz', 'Leche', 'Huevos', 'Verduras', 'Menestras'];

  constructor(private fb: FormBuilder, private planNutricionalService: PlanNutricionalService) {
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
      const planData = {
        tipoUsuario: 'PROFESIONAL', // O el tipo de usuario adecuado
        profesionalId: 1, // O el ID del profesional adecuado
        nombre: this.planForm.value.planName,
        descripcion: this.planForm.value.description,
        fechaInicio: this.planForm.value.startDate,
        fechaFin: this.planForm.value.endDate,
        alimentos: this.planForm.value.requiredFoods.join(', ')
      };

      this.planNutricionalService.crearPlanNutricional(planData).subscribe(
        response => {
          console.log('Plan creado exitosamente', response);
          // Aquí puedes añadir lógica adicional como redireccionar al usuario
        },
        error => {
          console.error('Error al crear el plan', error);
        }
      );
    }
  }
}
