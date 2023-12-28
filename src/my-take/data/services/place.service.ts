import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { placeMocks } from '../mocks/place-mocks';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor() { }

  getPlaces(): Observable<Place[]> {
    return of(placeMocks)
  }

  getPlaceById(id: string): Observable<Place> {
    const place = placeMocks.find(p => p.id === id);
    if (place !== undefined) {
      return of(place);
    }

    throw new Error('Place not found.');
  }
}
