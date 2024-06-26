import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css']
})
export class ObjetivosComponent implements OnInit {
  registerForm: FormGroup;
  goals: any[] = [
    { name: 'Objetivo 1' },
    { name: 'Objetivo 2' },
    { name: 'Objetivo 3' }
  ];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      item: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmitRegister(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Aquí puedes añadir la lógica para registrar alimentos y bebidas
    }
  }

  createGoal(): void {
    // Lógica para crear un objetivo
  }

  editGoal(): void {
    // Lógica para editar un objetivo
  }

  deleteGoal(): void {
    // Lógica para eliminar un objetivo
  }
}
