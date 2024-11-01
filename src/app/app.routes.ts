import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: EventosComponent,
      },
      {
        path: 'eventos',
        component: EventosComponent,
      },
      {
        path: 'eventos/actividades/:id',
        component: ActividadesComponent,
      },
      {
        path: 'actividades/:id',
        component: ActividadesComponent,
      },
    ],
  },
];
