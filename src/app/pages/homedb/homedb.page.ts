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
            const isPostPaid = data.inpispostpaid === 'on'; 
            const CustomerData: CustomerData = {
              id: '',
              fullname: data.inpname,
              ispostpaid: isPostPaid, 
              price: parseInt(data.inprice),
              telno: data.intelno,
            };
            this.dataService.createData(CustomerData);
          }//hadler
        }
      ]
    });
    (await alert).present();
  }

  async deleteConfirmation(tmpObj:CustomerData) {
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
            this.deleteData(tmpObj);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteData(data_2:CustomerData): void {
    this.dataService
      .deleteData(data_2)
      .then(() => {
        console.log('Data deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  }

  async editConfirmation(tmpObj: CustomerData) {
    const alert = await this.alertCtrl.create({
      header: 'Edit',
      message: 'Are you sure you want to edit this data?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Edit',
          handler: () => {
            this.update(tmpObj);
          },
        },
      ],
    });

    await alert.present();
  }

  async update(tmpObj: CustomerData) {
    const alert = await this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'Fill the form',
      inputs: [
        {
          name: 'inpname',
          type: 'text',
          value: tmpObj.fullname, 
          placeholder: 'Name',
        },
        {
          name: 'inprice',
          type: 'number',
          value: tmpObj.price.toString(),
          placeholder: 'Price',
        },
        {
          name: 'intelno',
          type: 'number',
          value: tmpObj.telno,
          placeholder: 'tel no.',
        },
        {
          name: 'inpispostpaid',
          type: 'checkbox',
          checked: tmpObj.ispostpaid,
          placeholder: 'Is post paid',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Save',
          handler: (data) => {
            const isPostPaid = data.inpispostpaid === 'on';
            const editedData: CustomerData = {
              id: tmpObj.id,
              fullname: data.inpname,
              ispostpaid: isPostPaid,
              price: parseInt(data.inprice),
              telno: data.intelno,
            };

            this.dataService
              .updateData(editedData)
              .then(() => {
                console.log('Data updated successfully.');
              })
              .catch((error) => {
                console.error('Error updating data:', error);
              });
          },
        },
      ],
    });

    await alert.present();
  }

}
