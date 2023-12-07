import { Component, Input } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share-button',
  templateUrl: 'share-button.component.html',
  styleUrls: ['share-button.component.scss'],
})
export class ShareButtonComponent {
  @Input() url: string;

  constructor() {}

  async share() {
    await Share.share({
      title: 'Share Pick Up Game',
      text: 'Share Pick Up Game',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share Pick Up Game',
    });
  }
}
