import { AuthService } from './../../../auth/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css'],
})
export class LoginWindowComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  buildForm(){
    this.form = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const user = {
      userName: this.form.get('userName').value,
      password: this.form.get('password').value
    }
    this._authService.login(this.form.value)
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token)
          this._authService.loggedUser.next(res);
          console.log(res);
          this._router.navigate(['/home']);
        }
      )
  }
}
