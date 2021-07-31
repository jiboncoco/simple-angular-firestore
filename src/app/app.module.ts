import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';  //import baris ini
import { environment } from 'src/environments/environment'; //import baris ini
import { AngularFirestoreModule } from "@angular/fire/firestore";   //import baris ini

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),    //import baris ini
    AngularFirestoreModule  //import baris ini
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
