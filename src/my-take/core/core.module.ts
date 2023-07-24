import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './components/core.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [CoreComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		CoreRoutingModule,
	],
	bootstrap: [CoreComponent],
})
export class CoreModule {}
