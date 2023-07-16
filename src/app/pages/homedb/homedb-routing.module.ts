import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomedbPage } from './homedb.page';

const routes: Routes = [
  {
    path: '',
    component: HomedbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomedbPageRoutingModule {}
