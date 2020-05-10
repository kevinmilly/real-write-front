import { NgModule } from '@angular/core';


import { IonicModule } from '@ionic/angular';

import { RelatedPageRoutingModule } from './related-routing.module';

import { RelatedPage } from './related.page';
import { FeaturesModule } from 'src/app/shared/modules/features/features.module';


@NgModule({
  imports: [
    RelatedPageRoutingModule,
    FeaturesModule,
    IonicModule
  ],
  declarations: [RelatedPage]
})
export class RelatedPageModule {}
