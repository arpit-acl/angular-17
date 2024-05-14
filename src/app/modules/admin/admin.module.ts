import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { IndexComponent } from '../../pages/admin/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('../../pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      // {
      //   path: 'dashboard',
      //   loadComponent: () => import('../../pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
      // },
      
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
