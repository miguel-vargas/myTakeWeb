import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PlaceCardComponent } from '@core/components/place-card/place-card.component';
import { SearchComponent } from '@core/components/search/search.component';
import { Observable, map } from 'rxjs';
import { Place } from 'src/my-take/data/models/place';
import { PlaceService } from 'src/my-take/data/services/place.service';

@Component({
  selector: 'my-take-places',
  standalone: true,
  imports: [PlaceCardComponent, NgFor, NgIf, AsyncPipe, SearchComponent],
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
  placeService: PlaceService = inject(PlaceService);
  places$: Observable<Place[]> = this.placeService.getPlaces();

  searchPlaces(searchTerm: string) {
    if (searchTerm === '') {
      this.places$ = this.placeService.getPlaces();
    }
    else {
      this.places$ = this.places$.pipe(
        map(places => places.filter(place => place.name.toLowerCase().includes(searchTerm) || place.description.toLowerCase().includes(searchTerm)))
      );
    }
  }
}
