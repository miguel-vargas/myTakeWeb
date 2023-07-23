import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MyTakeComponent } from './app.component';

@NgModule({
  declarations: [
    MyTakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MyTakeComponent]
})
export class MyTakeModule { }
