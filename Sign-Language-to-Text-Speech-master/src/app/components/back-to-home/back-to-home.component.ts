import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-back-to-home',
  template: `
    <ion-button (click)="goToHome()" color="primary">
      <ion-icon name="home-outline" slot="start"></ion-icon>
      Back to Home
    </ion-button>
  `,
  standalone: true,
  imports: [IonButton, IonIcon],
  styles: [`
    :host {
      display: block;
      margin: 1rem;
    }
  `]
})
export class BackToHomeComponent {
  // You can configure the home URL here
  private homeUrl = 'https://your-domain.com/translate'; // Change this value to your desired URL

  constructor(private router: Router) {}

  // You can also set the URL through an input property
  setHomeUrl(url: string) {
    this.homeUrl = url;
  }

  goToHome() {
    this.router.navigate([this.homeUrl]);
  }
} 