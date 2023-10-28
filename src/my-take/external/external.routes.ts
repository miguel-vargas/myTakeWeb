import { Routes } from '@angular/router';
import { RouterPath } from './constants/routes';
import { ExternalComponent } from './external.component';

const EXTERNAL_ROUTES: Routes = [
	{
		path: '',
		component: ExternalComponent,
		children: [
			{
				path: RouterPath.LANDING,
				loadComponent: () =>
					import('./features/landing/landing.component').then(
						(m) => m.LandingComponent
					),
			},
			{
				path: RouterPath.LOGIN,
				loadComponent: () =>
					import('./features/login/login.component').then(
						(m) => m.LoginComponent
					),
			},
			{
				path: RouterPath.SIGN_UP,
				loadComponent: () =>
					import('./features/sign-up/sign-up.component').then(
						(m) => m.SignUpComponent
					),
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: RouterPath.LANDING,
			},
		],
	},
];

export default EXTERNAL_ROUTES;
