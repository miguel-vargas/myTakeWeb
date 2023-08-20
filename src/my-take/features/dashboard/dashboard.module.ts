import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSearchComponent } from './components/dashboard-search/dashboard-search.component';

@NgModule({
	declarations: [DashboardComponent, DashboardSearchComponent],
	imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
