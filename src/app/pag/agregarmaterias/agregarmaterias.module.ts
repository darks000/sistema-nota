import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarmateriasPageRoutingModule } from './agregarmaterias-routing.module';

import { AgregarmateriasPage } from './agregarmaterias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarmateriasPageRoutingModule
  ],
  declarations: [AgregarmateriasPage]
})
export class AgregarmateriasPageModule {}
