import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@Component({
	selector: 'my-take-external',
	templateUrl: './external.component.html',
	styleUrls: ['./external.component.scss'],
	standalone: true,
	imports: [ToolbarComponent, RouterOutlet],
})
export class ExternalComponent {}
