import {
	Component,
	EventEmitter,
	Input,
	Output,
	booleanAttribute,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FORM_CONFIG } from '@core/constants/form-config';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
	selector: 'my-take-search',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatProgressBarModule,
	],
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
	@Input({ transform: booleanAttribute }) showLoading = false;
	@Output() searched = new EventEmitter<string>();

	searchForm = this.fb.group({
		searchTerm: [''],
	});

	isLoading = false;

	constructor(private fb: NonNullableFormBuilder) {
		this.searchForm.controls.searchTerm.valueChanges
			.pipe(
				tap(() => {
					this.isLoading = true;
				}),
				debounceTime(FORM_CONFIG.defaultDebounceTime),
				distinctUntilChanged(),
				takeUntilDestroyed(),
			)
			.subscribe((term) => {
				this.isLoading = false;
				this.searched.emit(term.toLowerCase());
			});
	}
}
