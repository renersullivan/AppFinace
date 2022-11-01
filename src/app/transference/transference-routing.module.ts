import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferencePage } from './transference.page';

const routes: Routes = [
  {
    path: '',
    component: TransferencePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferencePageRoutingModule {}
