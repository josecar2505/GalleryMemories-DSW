import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public authService: AuthenticationService) {}

  navigateTo(page: string) {
    switch (page) {
      case 'mis-eventos':
        this.router.navigate(['/mis-eventos']);
        break;
      case 'mis-invitaciones':
        this.router.navigate(['/mis-invitaciones']);
        break;
      case 'agregar-invitacion':
        this.router.navigate(['/agregar-invitacion']);
        break;
      case 'crear-evento':
        this.router.navigate(['/crear-evento']);
        break;
      case 'configuracion':
        this.router.navigate(['/configuracion']);
        break;
      // Agrega más casos para las demás opciones del menú
      default:
        break;
    }
  }

  async logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    })
  }
}
