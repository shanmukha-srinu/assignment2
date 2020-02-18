import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Superhero1Component } from './superhero1/superhero1.component';
import { Superhero2Component } from './superhero2/superhero2.component';
import { MainsubcontrollerComponent } from './mainsubcontroller/mainsubcontroller.component';

@NgModule({
  declarations: [
    AppComponent,
    Superhero1Component,
    Superhero2Component,
    MainsubcontrollerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
