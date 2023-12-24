import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PlaceCardComponent } from '@core/components/place-card/place-card.component';

@Component({
  selector: 'my-take-places',
  standalone: true,
  imports: [PlaceCardComponent, NgFor],
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {

}
