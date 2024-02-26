import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisInvitacionesPage } from './mis-invitaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisInvitacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisInvitacionesPageRoutingModule {}
