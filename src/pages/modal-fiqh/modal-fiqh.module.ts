import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalFiqhPage } from './modal-fiqh';

@NgModule({
  declarations: [
    ModalFiqhPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalFiqhPage),
  ],
  exports: [
    ModalFiqhPage
  ]
})
export class ModalFiqhPageModule {}
