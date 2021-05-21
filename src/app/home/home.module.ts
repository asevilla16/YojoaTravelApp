import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


//material
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [HomeComponent, LandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ]
})
export class HomeModule { }
