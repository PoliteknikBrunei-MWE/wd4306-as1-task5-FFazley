import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTitle, IonToolbar, IonHeader, IonContent, IonButtons, IonList, IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonLabel, IonIcon, IonItem, IonList, IonButtons, IonContent, IonHeader, IonToolbar, IonTitle, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
