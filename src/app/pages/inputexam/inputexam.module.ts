import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputexamPageRoutingModule } from './inputexam-routing.module';

import { InputexamPage } from './inputexam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputexamPageRoutingModule
  ],
  declarations: [InputexamPage]
})
export class InputexamPageModule {}
