import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      contrasenaConfirm: ['', Validators.required],
      anios: [0, Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registro exitoso', response);
        },
        error => {
          console.error('Error en el registro', error);
        }
      );
    }
  }

  passwordMatchValidator(form: FormGroup): { [s: string]: boolean } | null {
    if (form.get('contrasena')?.value !== form.get('contrasenaConfirm')?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
}
