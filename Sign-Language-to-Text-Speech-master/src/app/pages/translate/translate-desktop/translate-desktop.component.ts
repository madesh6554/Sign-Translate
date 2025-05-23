import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {BaseComponent} from '../../../components/base/base.component';
import {IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonBackButton} from '@ionic/angular/standalone';
import {RouterLink} from '@angular/router';
import {LanguageSelectorsComponent} from '../language-selectors/language-selectors.component';
import {TranslocoPipe} from '@jsverse/transloco';
import {NtkmeButtonModule} from '@ctrl/ngx-github-buttons';
import {SpokenToSignedComponent} from '../spoken-to-signed/spoken-to-signed.component';
import {addIcons} from 'ionicons';
import {language} from 'ionicons/icons';
import {LogoComponent} from '../../../components/logo/logo.component';

@Component({
  selector: 'app-translate-desktop',
  templateUrl: './translate-desktop.component.html',
  styleUrls: ['./translate-desktop.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonContent,
    IonTitle,
    IonIcon,
    IonBackButton,
    LanguageSelectorsComponent,
    TranslocoPipe,
    SpokenToSignedComponent,
    LogoComponent,
  ],
})
export class TranslateDesktopComponent extends BaseComponent {
  private router = inject(Router);

  constructor() {
    super();
    addIcons({language});
  }

  navigateToHome() {
    window.location.href = 'https://gemini-analyzer.onrender.com/';
  }
}
