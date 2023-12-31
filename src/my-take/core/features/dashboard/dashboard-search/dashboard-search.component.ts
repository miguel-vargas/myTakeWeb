import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from '@core/components/search/search.component';

@Component({
	selector: 'my-take-dashboard-search',
	templateUrl: './dashboard-search.component.html',
	styleUrls: ['./dashboard-search.component.scss'],
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		SearchComponent,
	],
})
export class DashboardSearchComponent {
	searchForm = new FormGroup({
		searchTerm: new FormControl(''),
	});
}
