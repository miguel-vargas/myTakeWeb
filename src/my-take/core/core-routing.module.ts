import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core.component';

const routes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../features/dashboard/dashboard.module').then(
						(m) => m.DashboardModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
