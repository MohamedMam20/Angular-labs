import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  usersData: Users[] = [];
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  submitRegiserForm() {
    if (this.registerForm.valid) {
      const { fullName, email, password, confirmPassword } =
        this.registerForm.value;
      const newUser: Users = { fullName, email, password, confirmPassword };
      this.usersData.push(newUser);
      this.router.navigate(['/app-login']);
      console.log(this.usersData);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    } else {
      return false;
    }
  }
}
