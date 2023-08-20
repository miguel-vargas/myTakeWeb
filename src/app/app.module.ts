import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from '@state/effects/app.effects';
import { metaReducers, reducers } from '@state/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		AppRoutingModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
		}),
		EffectsModule.forRoot([AppEffects]),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
