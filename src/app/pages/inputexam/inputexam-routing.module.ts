import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputexamPage } from './inputexam.page';

const routes: Routes = [
  {
    path: '',
    component: InputexamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputexamPageRoutingModule {}
