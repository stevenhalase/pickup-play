import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components } from 'src/app/components';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [...components],
  exports: [...components],
})
export class SharedModule {}
