import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateComponent } from './components/activities/create/create.component';
import { ListComponent } from './components/activities/list/list.component';
import { AdminComponent } from './admin.component';
import {MaterialModule} from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    AdminComponent,
    ActivityListComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
