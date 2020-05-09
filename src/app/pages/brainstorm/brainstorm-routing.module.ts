import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrainstormPage } from './brainstorm.page';

const routes: Routes = [
  {
    path: '',
    component: BrainstormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrainstormPageRoutingModule {}
