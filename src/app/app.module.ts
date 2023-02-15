import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercise3Component } from './exercise3/exercise3.component';

import {FormsModule} from '@angular/forms';
import { Exercise4Component } from './exercise4/exercise4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercice2Component,
    Exercise3Component,
    Exercise4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
