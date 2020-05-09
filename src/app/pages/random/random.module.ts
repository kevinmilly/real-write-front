import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RandomPage } from './random.page';

import { RandomPageRoutingModule } from './random-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RandomPage }]),
    RandomPageRoutingModule,
  ],
  declarations: [RandomPage]
})
export class RandomPageModule {}
