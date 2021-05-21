import { LoginGuard } from './core/guards/login.guard';
import { LoginLayoutComponent } from './layout/components/login-layout/login-layout.component';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: '**',
        redirectTo: 'landing'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
