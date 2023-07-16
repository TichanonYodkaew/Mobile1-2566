import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  productlist: any;   // define product list 

  constructor(public alertCtrl: AlertController) {
    this.productlist = [
      {id: 1,
       productname: "Perfume",
       price: "1055",
       //icon2: "nutrition",
       icon: "https://img.icons8.com/color/48/perfume-bottle.png",
      },
      {id: 2,
        productname: "Face-Powder",
        price: "355",
       icon: "https://img.icons8.com/color/48/face-powder.png"
      },
      {id: 3,
        productname: "Nail Polish",
        price: "125",
       icon: "https://img.icons8.com/color/48/eye-shadows.png"
      }
    ];

  }

  ngOnInit() {
  }

  async showedit(item:any) {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'Fill the form',
      inputs: [
        {
          name: 'inpname',
          placeholder: 'product name',
          value: item.productname
        },
        {
          name: 'inprice',
          placeholder: 'price',
          value: item.price
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data: any) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: (data: { inpname: any; inprice: any; }) => {
            //code here when user click update
            console.log("update",this.productlist.length);
            console.log(item);
            for (let i=0; i<this.productlist.length; i++){
              console.log(this.productlist[i]);
              if (this.productlist[i] == item){//found
                console.log("data.inpname",data.inpname, data.inprice);

                  this.productlist[i].productname = data.inpname;
                  this.productlist[i].price = data.inprice;
              }
            }

          }//hadler
        }
      ]
    });
    (await alert).present();
  }


}
