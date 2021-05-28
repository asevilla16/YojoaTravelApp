import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './components/reservation/reservation.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    MaterialModule
  ]
})
export class ReservationModule { }
