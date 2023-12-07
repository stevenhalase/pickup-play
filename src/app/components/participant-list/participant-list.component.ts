import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Participant, RSVP } from 'src/app/data';

@Component({
  selector: 'app-participant-list',
  templateUrl: 'participant-list.component.html',
  styleUrls: ['participant-list.component.scss'],
})
export class ParticipantListComponent {
  RSVP = RSVP;

  @Input() participants: Participant[];
  @Input() isOpen: boolean;

  @Output() open = new EventEmitter<boolean>();

  constructor() {}

  setOpen(open: boolean) {
    this.open.emit(open);
  }
}
