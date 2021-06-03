import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import {ActivityComponent} from './activity/activity.component';

const routes: Routes = [

  {
    path: '',
    component: SidenavComponent
  },
  {
    path: '',
    component: ActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
