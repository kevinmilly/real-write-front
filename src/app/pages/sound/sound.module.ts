import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoundPage } from './sound.page';


import { SoundPageRoutingModule } from './sound-routing.module';
import { SearchAssistComponent } from 'src/app/components/search-assist/search-assist.component';
import { SearchOptionsPage } from '../modals/search-options.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SoundPageRoutingModule,

  ],
  declarations: [SoundPage, SearchOptionsPage, SearchAssistComponent],
  entryComponents:[SearchOptionsPage]
})
export class SoundPageModule {}
