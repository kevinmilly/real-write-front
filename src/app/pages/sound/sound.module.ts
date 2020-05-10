import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { SoundPage } from './sound.page';


import { SoundPageRoutingModule } from './sound-routing.module';
import { SearchOptionsPage } from '../modals/search-options.page';
import { FeaturesModule } from 'src/app/shared/modules/features/features.module';


@NgModule({
  imports: [
    IonicModule,
    SoundPageRoutingModule,
    FeaturesModule
  ],
  declarations: [SoundPage, SearchOptionsPage],
  entryComponents:[SearchOptionsPage]
})
export class SoundPageModule {}
