import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@Component({
	selector: 'my-take-core',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss'],
	standalone: true,
	imports: [ToolbarComponent, RouterOutlet],
})
export class CoreComponent {}
