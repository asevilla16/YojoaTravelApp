import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { ActivityComponent } from './activity/activity.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ActivityComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ]
})
export class ProfileModule { }
