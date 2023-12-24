import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'my-take-search',
  standalone: true,
  imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
	searchForm = new FormGroup({
		searchTerm: new FormControl(''),
	});
}
