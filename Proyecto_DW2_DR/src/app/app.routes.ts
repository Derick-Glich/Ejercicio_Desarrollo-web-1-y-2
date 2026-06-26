import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Busqueda } from './pages/busqueda/busqueda';
import { Filtro } from './pages/filtro/filtro';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'busqueda', component: Busqueda },
  { path: 'filtro', component: Filtro }
];