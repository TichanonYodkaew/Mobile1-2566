import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeresultPageRoutingModule } from './homeresult-routing.module';

import { HomeresultPage } from './homeresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeresultPageRoutingModule
  ],
  declarations: [HomeresultPage]
})
export class HomeresultPageModule {}
