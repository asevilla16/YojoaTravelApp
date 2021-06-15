import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  buildForm() {
    this.form = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const user = {
      userName: this.form.get('userName').value,
      password: this.form.get('password').value,
    };
    this._authService.login(this.form.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this._authService.loggedUser.next(res);
      console.log(res);
      this._router.navigate(['/home']);
    });
  }

  signUp() {
    this._router.navigate(['/auth/register'])
  }
}
