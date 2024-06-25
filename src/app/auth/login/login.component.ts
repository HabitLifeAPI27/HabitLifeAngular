import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      // Lógica de autenticación aquí
    }
  }

  controlHasError(controlName: string, errorName: string): boolean {
    return this.form.get(controlName)?.hasError(errorName) ?? false;
  }
}
