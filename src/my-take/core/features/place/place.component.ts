import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PlaceService } from 'src/my-take/data/services/place.service';
import { PlaceParams } from './models/place-params';

@Component({
  selector: 'my-take-place',
  standalone: true,
  imports: [MatCardModule, NgIf, AsyncPipe],
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  placeService: PlaceService = inject(PlaceService);
  
  place$ = this.route.params
      .pipe(
          switchMap((params: PlaceParams) => {
              return this.placeService.getPlaceById(params.placeId!)
          })
      );
}
