import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RhymeBookPage } from './rhymeBook.page';
import { RhymeBookPageRoutingModule } from './rhymeBook-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RhymeBookPageRoutingModule
  ],
  declarations: [RhymeBookPage]
})
export class RhymeBookPageModule {}
