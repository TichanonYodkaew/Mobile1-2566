import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CrudService, CustomerData } from './crud.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {
  datalist: CustomerData[]=[];
  constructor(
    private dataService: CrudService,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef
  ) {
    this.dataService.loadAllData().subscribe((res) => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}
}
