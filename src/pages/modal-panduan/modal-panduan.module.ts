import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPanduanPage } from './modal-panduan';

@NgModule({
  declarations: [
    ModalPanduanPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPanduanPage),
  ],
  exports: [
    ModalPanduanPage
  ]
})
export class ModalPanduanPageModule {}
