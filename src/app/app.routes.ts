import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children : [
            {
                path: '',
                redirectTo: 'signin',
                pathMatch: 'full',
            },
            {
                path: 'signin',
                loadComponent: () => import('./pages/auth/signin/signin.component')
            },
            {
                path: 'signup',
                loadComponent: () => import('./pages/auth/signup/signup.component')
            }
        ]
    },
    {
        path: 'admin',
        title: 'Admin',
        children: [
            {
              path: '',
              loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
            }
          ],
        //   canActivate: [authGuard],
        // component: AdminComponent,
        // children: [
        //     {
        //         path: 'admin',
        //         redirectTo: 'admin/dashboard',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path: 'dashboard',
        //         // loadComponent: () => import('')
        //     },
        //     {
        //         path: 'product',
        //         // loadChildren: () => import('')
        //     }
        // ]
    }
];
