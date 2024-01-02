import { Component } from '@angular/core';
import { SearchComponent } from '@core/components/search/search.component';

@Component({
	selector: 'my-take-dashboard-search',
	templateUrl: './dashboard-search.component.html',
	styleUrls: ['./dashboard-search.component.scss'],
	standalone: true,
	imports: [SearchComponent],
})
export class DashboardSearchComponent {}
