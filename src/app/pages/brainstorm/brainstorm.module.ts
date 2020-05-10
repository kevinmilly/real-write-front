import { NgModule } from '@angular/core';


import { IonicModule } from '@ionic/angular';

import { BrainstormPageRoutingModule } from './brainstorm-routing.module';

import { BrainstormPage } from './brainstorm.page';
import { FeaturesModule } from 'src/app/shared/modules/features/features.module';

@NgModule({
  imports: [
    IonicModule,
    BrainstormPageRoutingModule,
    FeaturesModule
  ],
  declarations: [BrainstormPage]
})
export class BrainstormPageModule {}
