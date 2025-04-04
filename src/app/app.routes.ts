import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LanchonetesComponent } from './modules/lanchonetes/lanchonetes.component';
import { CompararPrecosComponent } from './modules/comparar-precos/comparar-precos.component';
import { Error404Component } from './modules/error/pages/error-404/error-404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lanchonetes', component: LanchonetesComponent},
  { path: 'comparar-precos', component: CompararPrecosComponent},
  { path: '**', component: Error404Component }
];
