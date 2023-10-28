import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { AppEffects } from '@state/effects/app.effects';
import { metaReducers, reducers } from '@state/reducers';
import { AppComponent } from './app/app.component';
import { authCanMatchGuard } from './my-take/external/guards/auth-can-match.guard';

const APP_ROUTES: Routes = [
	{
		path: '',
		loadChildren: () => import('./my-take/external/external.routes'),
	},
	{
		path: '',
		canMatch: [authCanMatchGuard],
		loadChildren: () => import('./my-take/core/core.routes'),
	},
	{
		path: '**',
		redirectTo: '',
	},
];

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(APP_ROUTES),
		provideEffects([AppEffects]),
		provideStore(reducers, {
			metaReducers,
		}),
		provideAnimations(),
		provideAnimations(),
	],
}).catch((err) => console.error(err));
