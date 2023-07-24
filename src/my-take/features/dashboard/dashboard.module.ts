import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashaboardComponent } from './components/dashaboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
	declarations: [DashaboardComponent],
	imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
