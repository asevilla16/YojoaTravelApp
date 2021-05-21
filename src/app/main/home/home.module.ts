import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
//Material


export const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCarouselComponent,
    
    
  ]
})
export class HomeModule { }
