import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { isEqual } from 'lodash';
import { Observable } from 'rxjs';
import { PickupGame, User } from 'src/app/data';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss'],
})
export class ChatComponent implements OnInit {
  isEqual = isEqual;

  @Input() user: User;
  @Input() pickupGame: PickupGame;
  @Input() isOpen: boolean;

  @Output() open = new EventEmitter<boolean>();

  user$: Observable<User>;

  constructor(private _authenticationService: AuthenticationService) {
    this.user$ = this._authenticationService.user$;
  }

  ngOnInit(): void {}

  setOpen(open: boolean) {
    this.open.emit(open);
  }
}
