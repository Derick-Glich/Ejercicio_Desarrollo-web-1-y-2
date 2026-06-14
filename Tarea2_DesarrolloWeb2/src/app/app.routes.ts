import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Videojuegos } from './pages/videojuegos/videojuegos';
import { Publisher } from './pages/publisher/publisher';
import { Contactos } from './pages/contactos/contactos';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'videojuegos',
    component: Videojuegos
  },
  {
    path: 'publisher',
    component: Publisher
  },
  {
    path: 'contactos',
    component: Contactos
  }
];