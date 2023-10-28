import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'my-take-take-card',
    templateUrl: './take-card.component.html',
    styleUrls: ['./take-card.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatButtonModule]
})
export class TakeCardComponent {

}
