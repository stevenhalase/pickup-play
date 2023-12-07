import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PickupGame } from 'src/app/data';
import { PickupGameService } from 'src/app/services';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
