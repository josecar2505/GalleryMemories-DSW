import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisInvitacionesPageRoutingModule } from './mis-invitaciones-routing.module';

import { MisInvitacionesPage } from './mis-invitaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisInvitacionesPageRoutingModule
  ],
  declarations: [MisInvitacionesPage]
})
export class MisInvitacionesPageModule {}
