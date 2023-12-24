import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Place } from 'src/my-take/data/models/place';

@Component({
  selector: 'my-take-place-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent {
  @Input({ required: true }) place!: Place;
}
