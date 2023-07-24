import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: `/${RouterPath.LOGIN}` },
	{
		path: RouterPath.LOGIN,
		loadChildren: () =>
			import('../features/login/login.module').then((m) => m.LoginModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
