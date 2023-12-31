import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [RouterOutlet],
})
export class AppComponent {}
