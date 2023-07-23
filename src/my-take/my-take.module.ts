import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyTakeRoutingModule } from './my-take-routing.module';
import { MyTakeComponent } from './my-take.component';

@NgModule({
  declarations: [
    MyTakeComponent
  ],
  imports: [
    BrowserModule,
    MyTakeRoutingModule
  ],
  providers: [],
  bootstrap: [MyTakeComponent]
})
export class MyTakeModule { }
