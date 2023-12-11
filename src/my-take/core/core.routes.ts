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
				path: RouterPath.ALL_TAKES,
				loadComponent: () =>
					import('./features/all-takes/all-takes.component').then(
						(m) => m.AllTakesComponent
					),
			},
			{
				path: RouterPath.PLACES,
				loadComponent: () =>
					import('./features/places/places.component').then(
						(m) => m.PlacesComponent
					),
			},
			{
				path: RouterPath.PLACE_BY_PLACE_ID,
				loadComponent: () =>
					import('./features/place/place.component').then(
						(m) => m.PlaceComponent
					),
			},
			{
				path: RouterPath.TAKES_BY_PLACE_ID,
				loadComponent: () =>
					import('./features/takes/takes.component').then(
						(m) => m.TakesComponent
					),
			},
			{
				path: RouterPath.TAKE_BY_TAKE_ID,
				loadComponent: () =>
					import('./features/take/take.component').then(
						(m) => m.TakeComponent
					),
			},
		],
	},
];

export default CORE_ROUTES;
