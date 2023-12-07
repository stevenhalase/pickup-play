import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Location } from 'src/app/data';

const apiKey = 'apiKey';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() location: Location;

  @ViewChild('map') map: ElementRef<HTMLElement>;
  private _newMap: GoogleMap;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._createMap();
  }

  private async _createMap() {
    console.log('this.location:::', this.location);
    this._newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: this.map.nativeElement, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: this.location.lat,
          lng: this.location.lng,
        },
        zoom: 15, // The initial zoom level to be rendered by the map
      },
    });

    const markerId = await this._newMap.addMarker({
      coordinate: {
        lat: this.location.lat,
        lng: this.location.lng,
      },
    });
  }
}
