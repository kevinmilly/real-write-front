import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundPage } from './sound.page';

const routes: Routes = [
  {
    path: '',
    component: SoundPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoundPageRoutingModule {}
