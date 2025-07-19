import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [

  // Add this route:
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('mftenantexampleuno', './Component').then((m) => m.AppComponent),
  },

  /*{
    path: '**',
    component: NotFoundComponent,
  },
  */
];
