import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('../my-take/core/core.module').then((m) => m.CoreModule),
	},
	{
		path: RouterPath.LOGIN,
		loadChildren: () =>
			import('../my-take/features/login/login.module').then(
				(m) => m.LoginModule
			),
	},
	{
		path: RouterPath.SIGN_UP,
		loadChildren: () =>
			import('../my-take/features/sign-up/sign-up.module').then(
				(m) => m.SignUpModule
			),
	},
	{
		path: '**',
		loadChildren: () =>
			import('../my-take/core/core.module').then((m) => m.CoreModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
