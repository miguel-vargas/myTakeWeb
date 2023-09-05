import { Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';
import { CoreComponent } from './core.component';

const CORE_ROUTES: Routes = [
	{
		path: '',
		component: CoreComponent,
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
