import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';
import { ExternalComponent } from './components/external.component';

const routes: Routes = [
	{
		path: '',
		component: ExternalComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../features/landing/landing.module').then(
						(m) => m.LandingModule
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
					import('../features/sign-up/sign-up.module').then(
						(m) => m.SignUpModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ExternalRoutingModule {}
