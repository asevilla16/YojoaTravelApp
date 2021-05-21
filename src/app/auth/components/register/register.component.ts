import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {
    this.buildForm();
  }

  buildForm() {
    this.form = this._formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  register() {
    const user = {
      userName: this.form.get('userName').value,
      email: this.form.get('email').value,
      phone: this.form.get('phone').value,
      password: this.form.get('password').value,
    };
    console.log({ user });
    this._authService.signUp(this.form.value).subscribe((res: any) => {
      console.log({ res });
    });
  }
}
