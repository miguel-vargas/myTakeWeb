import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'my-take-external-toolbar',
	standalone: true,
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
	imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
})
export class ToolbarComponent {}
