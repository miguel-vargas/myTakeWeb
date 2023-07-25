import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/modules/shared.module';
import { CoreComponent } from './components/core.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
	declarations: [CoreComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		SharedModule,
		CoreRoutingModule,
	],
	bootstrap: [CoreComponent],
})
export class CoreModule {}
