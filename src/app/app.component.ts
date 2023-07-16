import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'bulb' },
    { title: 'Contact', url: '/contact', icon: 'mail' },
    { title: 'Gallery', url: '/gallery', icon: 'images' },
    { title: 'Setting', url: '/setting', icon: 'settings' },
    { title: 'HomeDB', url: '/homedb', icon: 'server' }
  ];
  constructor() {}
}
