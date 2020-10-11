import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarmateriasPage } from './agregarmaterias.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarmateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarmateriasPageRoutingModule {}
