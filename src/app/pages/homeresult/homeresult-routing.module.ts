import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeresultPage } from './homeresult.page';

const routes: Routes = [
  {
    path: '',
    component: HomeresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeresultPageRoutingModule {}
