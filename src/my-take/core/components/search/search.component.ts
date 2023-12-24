import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged } from 'rxjs';

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
  @Output() onSearch = new EventEmitter<string>();

	searchForm = new FormGroup({
		searchTerm: new FormControl(''),
	});

  constructor() {
    this.searchForm.controls.searchTerm.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(term => {
        if (term !== null) {
          this.onSearch.emit(term.toLowerCase());
        }
      });
  }
}
