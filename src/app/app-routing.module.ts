import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'materias/:id',loadChildren: () => import('./pag/lista-materias/lista-materias.module').then( m => m.ListaMateriasPageModule)},
  {path: 'Lista-materias',loadChildren: () => import('./pag/lista-materias/lista-materias.module').then( m => m.ListaMateriasPageModule)},
  {
    path: 'agregarmaterias',
    loadChildren: () => import('./pag/agregarmaterias/agregarmaterias.module').then( m => m.AgregarmateriasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
