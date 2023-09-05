import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'my-take-external-toolbar',
	templateUrl: './external-toolbar.component.html',
	styleUrls: ['./external-toolbar.component.scss'],
	standalone: true,
	imports: [MatToolbarModule, MatButtonModule, RouterLink],
})
export class ExternalToolbarComponent {}
