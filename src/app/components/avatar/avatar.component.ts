import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/data';
import { getInitials } from 'src/app/helpers';

@Component({
  selector: 'app-avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.scss'],
})
export class AvatarComponent implements OnChanges {
  @Input() user: User;
  @Input() showUsername = true;

  private _initials = new BehaviorSubject<string>('');
  initials$ = this._initials.asObservable();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['user'].currentValue &&
      getInitials(changes['user'].currentValue.fullName) !==
        this._initials.value
    ) {
      this._initials.next(getInitials(changes['user'].currentValue.fullName));
    }
  }
}
