import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  Imagen = 'assets/logo.png';
  regForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthenticationService,
    public router: Router,
    public alertController: AlertController,
    private firestore : AngularFirestore
  ) {}

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
        ],
      ],
    });
  }

  async signup() {
    if (this.regForm.invalid) {
      await this.presentInvalidFieldsAlert();
      return;
    }
  
    if (this.regForm.get('password').value !== this.regForm.get('confirmPassword').value) {
      await this.presentPasswordMismatchAlert();
      return;
    }
  
    const userId = await this.authService.registerUser(
      this.regForm.value.email,
      this.regForm.value.password
    ).catch((error) => {
      console.log(error);
      this.presentRegistrationErrorAlert();
      return null;
    });
  
    if (userId) {
      // Datos del usuario
      const userData = {
        name: this.regForm.value.name,
        email: this.regForm.value.email,
        userId: userId,
        // Otros datos del usuario si los tienes
      };
  
      // Guardar los datos del usuario en Firestore
      this.firestore.collection('usuarios').doc(userId).set(userData)
        .then(() => {
          console.log('Datos de usuario guardados en Firestore correctamente.');
          // Aquí puedes agregar más lógica después de guardar los datos si es necesario
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          console.error('Error al guardar los datos del usuario en Firestore:', error);
        });
    }
  }
  async presentInvalidFieldsAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Por favor, complete correctamente todos los campos.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentPasswordMismatchAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Las contraseñas no coinciden.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentRegistrationErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Ocurrió un error al registrar el usuario. Por favor, inténtalo nuevamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
