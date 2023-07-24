import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginauthPageRoutingModule } from './loginauth-routing.module';

import { LoginauthPage } from './loginauth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginauthPageRoutingModule
  ],
  declarations: [LoginauthPage]
})
export class LoginauthPageModule {}
