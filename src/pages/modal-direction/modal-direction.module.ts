import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDirectionPage } from './modal-direction';

@NgModule({
  declarations: [
    ModalDirectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDirectionPage),
  ],
  exports: [
    ModalDirectionPage
  ]
})
export class ModalDirectionPageModule {}
