import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from '@shared/constants/routes';

const routes: Routes = [
	{
		path: RouterPath.APP,
		loadChildren: () =>
			import('../my-take/core/core.module').then((m) => m.CoreModule),
	},
	{
		path: '',
		loadChildren: () =>
			import('../my-take/external/external.module').then(
				(m) => m.ExternalModule
			),
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
