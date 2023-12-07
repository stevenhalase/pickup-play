import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from 'src/app/components';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [...components],
  exports: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
