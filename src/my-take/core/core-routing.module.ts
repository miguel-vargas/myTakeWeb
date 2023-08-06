import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';
import { CoreComponent } from './components/core.component';

const routes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: RouterPath.DASHBOARD,
				loadChildren: () =>
					import('../features/dashboard/dashboard.module').then(
						(m) => m.DashboardModule
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

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
