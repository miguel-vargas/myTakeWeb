import { Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';
import { ExternalComponent } from './external.component';

const EXTERNAL_ROUTES: Routes = [
	{
		path: '',
		component: ExternalComponent,
		children: [
			{
				path: '',
				loadComponent: () =>
					import('../features/landing/landing.component').then(
						(m) => m.LandingComponent
					),
			},
			{
				path: RouterPath.LOGIN,
				loadComponent: () =>
					import('../features/login/login.component').then(
						(m) => m.LoginComponent
					),
			},
			{
				path: RouterPath.SIGN_UP,
				loadComponent: () =>
					import('../features/sign-up/sign-up.component').then(
						(m) => m.SignUpComponent
					),
			},
		],
	},
];

export default EXTERNAL_ROUTES;
