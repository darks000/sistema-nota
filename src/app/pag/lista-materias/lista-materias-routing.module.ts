import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMateriasPage } from './lista-materias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMateriasPageRoutingModule {}
