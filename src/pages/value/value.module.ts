import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValuePage } from './value';

@NgModule({
  declarations: [
    ValuePage,
  ],
  imports: [
    IonicPageModule.forChild(ValuePage),
  ],
})
export class ValuePageModule {}
