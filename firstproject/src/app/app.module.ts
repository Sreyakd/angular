import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CubeComponent } from './cube/cube.component';
import { PrimeComponent } from './prime/prime.component';
import { SmartsubComponent } from './smartsub/smartsub.component';
import {FormsModule} from '@angular/forms';
import { InterestComponent } from './interest/interest.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import 

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CubeComponent,
    PrimeComponent,
    SmartsubComponent,
    InterestComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
