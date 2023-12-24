import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PlaceCardComponent } from '@core/components/place-card/place-card.component';
import { SearchComponent } from '@core/components/search/search.component';
import { Observable } from 'rxjs';
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
}
