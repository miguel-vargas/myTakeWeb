import { Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';
import { authGuard } from '@shared/guards/auth.guard';
import { CoreComponent } from './core.component';

const CORE_ROUTES: Routes = [
	{
		path: '',
		component: CoreComponent,
		canActivate: [authGuard],
		children: [
			{
				path: RouterPath.DASHBOARD,
				loadComponent: () =>
					import('../features/dashboard/dashboard.component').then(
						(m) => m.DashboardComponent
					),
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: RouterPath.DASHBOARD,
			},
		],
	},
];

export default CORE_ROUTES;
