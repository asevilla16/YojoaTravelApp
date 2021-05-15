import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

//Material
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainLayoutComponent, LoginWindowComponent],
  imports: [
    CommonModule,

    //Material
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainLayoutComponent,
    LoginWindowComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
  ],
})
export class LayoutModule {}
