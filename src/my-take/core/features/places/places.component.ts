import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PlaceCardComponent } from '@core/components/place-card/place-card.component';
import { SearchComponent } from '@core/components/search/search.component';
import { Place } from '@data/models/place';
import { PlaceService } from '@data/services/place.service';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Component({
	selector: 'my-take-places',
	standalone: true,
	imports: [PlaceCardComponent, AsyncPipe, SearchComponent],
	templateUrl: './places.component.html',
	styleUrls: ['./places.component.scss'],
})
export class PlacesComponent {
	placeService: PlaceService = inject(PlaceService);
	searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');
	places$: Observable<Place[]> = combineLatest([
		this.searchTerm$,
		this.placeService.getPlaces(),
	]).pipe(
		map(([searchTerm, places]) => {
			if (searchTerm) {
				places.sort((a) =>
					a.name.toLowerCase().startsWith(searchTerm) ? -1 : 1,
				);
			} else {
				places.sort((a, b) => a.simpleId - b.simpleId);
			}

			return places.filter(
				(place) =>
					place.name.toLowerCase().includes(searchTerm) ||
					place.description.toLowerCase().includes(searchTerm),
			);
		}),
	);

	onSearched(searchTerm: string) {
		this.searchTerm$.next(searchTerm);
	}
}
