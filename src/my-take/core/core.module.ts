import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/modules/shared.module';
import { AppEffects } from '@state/effects/app.effects';
import { metaReducers, reducers } from '@state/reducers';
import { CoreComponent } from './components/core.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
	declarations: [CoreComponent, ToolbarComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		SharedModule,
		CoreRoutingModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
		}),
		EffectsModule.forRoot([AppEffects]),
	],
	bootstrap: [CoreComponent],
})
export class CoreModule {}
