import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: `/${RouterPath.LOGIN}` },
	{
		path: RouterPath.DASHBOARD,
		loadChildren: () =>
			import('../features/dashboard/dashboard.module').then(
				(m) => m.DashboardModule
			),
	},
	{
		path: RouterPath.LOGIN,
		loadChildren: () =>
			import('../features/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: RouterPath.SIGN_UP,
		loadChildren: () =>
			import('../features/sign-up/sign-up.module').then((m) => m.SignUpModule),
	},
	{
		path: '**',
		loadChildren: () =>
			import('../features/login/login.module').then((m) => m.LoginModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
