import { Routes } from '@angular/router';
import { authCanActivateGuard } from 'src/my-take/external/guards/auth-can-activate.guard';
import { RouterPath } from './constants/routes';
import { CoreComponent } from './core.component';

const CORE_ROUTES: Routes = [
	{
		path: '',
		component: CoreComponent,
		canActivate: [authCanActivateGuard],
		children: [
			{
				path: RouterPath.DASHBOARD,
				loadComponent: () =>
					import('./features/dashboard/dashboard.component').then(
						(m) => m.DashboardComponent
					),
			},
			{
				path: RouterPath.PLACES,
				loadComponent: () =>
					import('./features/places/places.component').then(
						(m) => m.PlacesComponent
					),
			},
		],
	},
];

export default CORE_ROUTES;
