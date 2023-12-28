
import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'my-take-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule
],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input({ transform: booleanAttribute }) showLoading = false;
  @Output() onSearch = new EventEmitter<string>();

	searchForm = new FormGroup({
		searchTerm: new FormControl(''),
	});

  isLoading = false;

  constructor() {
    this.searchForm.controls.searchTerm.valueChanges
      .pipe(
        tap(() => { this.isLoading = true }),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(term => {
        if (term !== null) {
          this.isLoading = false;
          this.onSearch.emit(term.toLowerCase());
        }
      });
  }
}
