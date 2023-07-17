import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CrudService, CustomerData } from './crud.service';
import { ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

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
    private cd: ChangeDetectorRef,
    public alertCtrl: AlertController
  ) {
    this.dataService.loadAllData().subscribe((res) => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}

  async create() {
    let alert = this.alertCtrl.create({
      header: 'Create',
      subHeader: 'Fill the form',
      inputs: [
        {
          name: 'inpname',
          type: 'text',
          placeholder: 'Name',
        },
        {
          name: 'inprice',
          type: 'number',
          placeholder: 'Price',
        },
        {
          name: 'intelno',
          type: 'number',
          placeholder: 'tel no.',
        },
        {
          name: 'inpispostpaid',
          type: 'checkbox',
          placeholder: 'Is post paid',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: (data) => {
            const CustomerData : CustomerData = {
              fullname: data.inpname,
              ispostpaid: data.inpispostpaid,
              price: data.inprice,
              telno: data.intelno,
            }
            this.dataService.createData(CustomerData);
          }//hadler
        }
      ]
    });
    (await alert).present();
  }

  async deleteConfirmation(documentId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete this data?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteData(documentId);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteData(documentId: string): void {
    this.dataService
      .deleteData(documentId)
      .then(() => {
        console.log('Data deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  }
}
