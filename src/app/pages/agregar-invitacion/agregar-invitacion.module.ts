import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarInvitacionPageRoutingModule } from './agregar-invitacion-routing.module';

import { AgregarInvitacionPage } from './agregar-invitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarInvitacionPageRoutingModule
  ],
  declarations: [AgregarInvitacionPage]
})
export class AgregarInvitacionPageModule {}
