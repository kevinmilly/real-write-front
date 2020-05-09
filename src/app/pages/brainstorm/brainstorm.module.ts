import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrainstormPageRoutingModule } from './brainstorm-routing.module';

import { BrainstormPage } from './brainstorm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrainstormPageRoutingModule
  ],
  declarations: [BrainstormPage]
})
export class BrainstormPageModule {}
