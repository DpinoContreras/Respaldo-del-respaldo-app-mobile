import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsignaturaPage } from './asignatura';

@NgModule({
  declarations: [
    AsignaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(AsignaturaPage),
  ],
})
export class AsignaturaPageModule {}
