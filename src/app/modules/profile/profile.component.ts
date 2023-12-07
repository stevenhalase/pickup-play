import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { Observable, tap, BehaviorSubject, withLatestFrom } from 'rxjs';
import { isEqual } from 'lodash';
import { Profile, User } from 'src/app/data';
import { AuthenticationService, ProfileService } from 'src/app/services';
import { getInitials } from 'src/app/helpers';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  getInitials = getInitials;

  user$: Observable<User>;
  userProfile$: Observable<Profile>;

  profileForm: FormGroup;
  private _hasChange = new BehaviorSubject<boolean>(false);
  hasChange$ = this._hasChange.asObservable();

  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.user$ = this._authenticationService.user$;
    this.userProfile$ = this._profileService.userProfile$;

    this.profileForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      avatar: [''],
    });

    this.profileForm.valueChanges
      .pipe(
        withLatestFrom(this.user$),
        tap(([change, user]) => {
          const formPlusUneditable = { ...change, fullName: user.fullName };
          this._hasChange.next(!isEqual(formPlusUneditable, user));
        })
      )
      .subscribe();

    this.user$
      .pipe(
        tap((user) => {
          this.profileForm.setValue({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            avatar: user?.avatar || '',
          });
        })
      )
      .subscribe();
  }

  onSubmit() {
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      this._authenticationService.updateUser(this.profileForm.value);
    } else {
      console.log(this.profileForm.errors);
    }
  }

  async pickAvatar() {
    console.log('pickAvatar');
    const result = await FilePicker.pickImages({
      multiple: false,
    });
    console.log(result);
  }
}
