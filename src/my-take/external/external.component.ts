import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExternalToolbarComponent } from './external-toolbar/external-toolbar.component';

@Component({
	selector: 'my-take-external',
	templateUrl: './external.component.html',
	styleUrls: ['./external.component.scss'],
	standalone: true,
	imports: [ExternalToolbarComponent, RouterOutlet],
})
export class ExternalComponent {}
