import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferencePageRoutingModule } from './transference-routing.module';

import { TransferencePage } from './transference.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferencePageRoutingModule
  ],
  declarations: [TransferencePage]
})
export class TransferencePageModule {}
