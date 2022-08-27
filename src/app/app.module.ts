import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatTestComponent } from './chat-test/chat-test.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';


let firebaseConfig = {
  apiKey: "AIzaSyCiJt5PNdQVth5K0Mu02jClWE3wQZky2iA",
  authDomain: "chat-test-76af5.firebaseapp.com",
  projectId: "chat-test-76af5",
  storageBucket: "chat-test-76af5.appspot.com",
  messagingSenderId: "285509761505",
  appId: "1:285509761505:web:3ea6617c3bc005bbde3aa0",
  dataBaseURL:"https://chat-test-76af5-default-rtdb.firebaseio.com/"
}
@NgModule({
  declarations: [
    AppComponent,
    ChatTestComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
