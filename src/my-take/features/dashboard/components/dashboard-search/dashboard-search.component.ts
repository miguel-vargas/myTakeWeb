import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'my-take-dashboard-search',
	templateUrl: './dashboard-search.component.html',
	styleUrls: ['./dashboard-search.component.scss'],
})
export class DashboardSearchComponent {
	searchForm = new FormGroup({
		searchTerm: new FormControl(''),
	});
}
