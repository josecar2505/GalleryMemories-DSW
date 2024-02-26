import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {environment } from 'src/environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})


// provideFirebaseApp(() => initializeApp({"projectId":"gallerymemories-dsw","appId":"1:471335347070:web:8f1457d9f493895405c92f","storageBucket":"gallerymemories-dsw.appspot.com","apiKey":"AIzaSyApzONqqJkmIT-BTERLAQHhoKXEYqdfjKs","authDomain":"gallerymemories-dsw.firebaseapp.com","messagingSenderId":"471335347070"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  
export class AppModule {}
