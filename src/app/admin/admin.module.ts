import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateComponent } from './components/activities/create/create.component';
import { ListComponent } from './components/activities/list/list.component';
import { AdminComponent } from './admin.component';
import {MaterialModule} from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
