import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateComponent } from './components/activities/create/create.component';
import { ListComponent } from './components/activities/list/list.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'activities/create',
    component: CreateComponent
  },
  {
    path: 'activities/list',
    component: ListComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
