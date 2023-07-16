import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomedbPageRoutingModule } from './homedb-routing.module';

import { HomedbPage } from './homedb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomedbPageRoutingModule
  ],
  declarations: [HomedbPage]
})
export class HomedbPageModule {}
