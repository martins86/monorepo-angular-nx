import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./pages/users/users.component').then((c) => c.UsersComponent),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import(
            './pages/users/shared/components/user-details/user-details.component'
          ).then((c) => c.UserDetailsComponent),
      },
    ],
  },
];
