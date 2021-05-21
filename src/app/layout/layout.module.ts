import { RouterModule } from '@angular/router';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

//Material
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, LoginLayoutComponent],
  imports: [
    RouterModule,
    CommonModule,

    //Material
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,

    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  exports: [
    MainLayoutComponent
  ],
})
export class LayoutModule {}
