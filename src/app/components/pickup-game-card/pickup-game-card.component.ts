import { Component, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { PickupGame, RSVP } from 'src/app/data';

@Component({
  selector: 'app-pickup-game-card',
  templateUrl: 'pickup-game-card.component.html',
  styleUrls: ['pickup-game-card.component.scss'],
})
export class PickupGameCardComponent {
  @Input() pickupGame: PickupGame;

  private _participantListOpen = new BehaviorSubject<boolean>(false);
  participantListOpen$ = this._participantListOpen.asObservable();

  private _chatOpen = new BehaviorSubject<boolean>(false);
  chatOpen$ = this._chatOpen.asObservable();

  constructor(private actionSheetCtrl: ActionSheetController) {}

  setParticipantListOpen(open: boolean) {
    this._participantListOpen.next(open);
  }

  setChatOpen(open: boolean) {
    this._chatOpen.next(open);
  }

  async showSignupSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Sign Up',
      subHeader: `${this.pickupGame.title} @ ${this.pickupGame.location.address}`,
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.signUp(RSVP.CONFIRMED);
          },
        },
        {
          text: 'Maybe',
          handler: () => {
            this.signUp(RSVP.MAYBE);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  signUp(rsvp: RSVP) {
    console.log('RSVP:::', rsvp);
  }
}
