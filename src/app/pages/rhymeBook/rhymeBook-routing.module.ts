import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhymeBookPage } from './rhymeBook.page';

const routes: Routes = [
  {
    path: '',
    component: RhymeBookPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhymeBookPageRoutingModule {}
