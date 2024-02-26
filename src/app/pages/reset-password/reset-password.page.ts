import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: any
  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  async resetPassword() {
    this.authService.resetPassword(this.email).then(() => {
      console.log('Password reset email sent!');
      this.router.navigate(['/login']);
    }
    
    ).catch((error) => {
      console.log(error);
    });
  }
}
