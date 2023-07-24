import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginauthPage } from './loginauth.page';

const routes: Routes = [
  {
    path: '',
    component: LoginauthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginauthPageRoutingModule {}
