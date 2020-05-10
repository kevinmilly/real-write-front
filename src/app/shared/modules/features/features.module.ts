import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAssistComponent } from 'src/app/components/search-assist/search-assist.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchAssistComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports:[SearchAssistComponent]
})
export class FeaturesModule { }
