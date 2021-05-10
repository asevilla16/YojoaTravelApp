import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

//Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,

    //Material
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
