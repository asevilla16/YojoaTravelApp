import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AuthComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    //Material
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,

    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
