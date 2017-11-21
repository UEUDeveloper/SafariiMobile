import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDoaPage } from './modal-doa';

@NgModule({
  declarations: [
    ModalDoaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDoaPage),
  ],
  exports: [
    ModalDoaPage
  ]
})
export class ModalDoaPageModule {}
