import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashaboardComponent } from './components/dashaboard.component';

const routes: Routes = [{ path: '', component: DashaboardComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
