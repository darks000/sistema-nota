import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMateriasPageRoutingModule } from './lista-materias-routing.module';

import { ListaMateriasPage } from './lista-materias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMateriasPageRoutingModule
  ],
  declarations: [ListaMateriasPage]
})
export class ListaMateriasPageModule {}
