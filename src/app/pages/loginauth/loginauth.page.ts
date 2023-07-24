import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-loginauth',
  templateUrl: './loginauth.page.html',
  styleUrls: ['./loginauth.page.scss'],
})
export class LoginauthPage implements OnInit {

  email2:any;
  pwd2:any;


  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit() {}

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.email2,this.pwd2);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/gallery', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.email2,this.pwd2);
    await loading.dismiss();

    if (user) {
      this.showAlert('Login Success', 'You welcome!');
    } else {
      this.showAlert('Login failed', 'Please try again!');
    }
  }

  async logout(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.logout();
    await loading.dismiss();

    return this.showAlert('Logout', this.email2 + 'has logout');
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
