import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    ],
})
export class DashboardSearchComponent {
	searchForm = new FormGroup({
		searchTerm: new FormControl(''),
	});
}
