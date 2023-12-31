import { Component } from '@angular/core';
import { TakeCardComponent } from '../../components/take-card/take-card.component';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';

@Component({
	selector: 'my-take-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	standalone: true,
	imports: [DashboardSearchComponent, TakeCardComponent],
})
export class DashboardComponent {}
