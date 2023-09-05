import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ExternalToolbarComponent } from './external-toolbar.component';

describe('ExternalToolbarComponent', () => {
	let component: ExternalToolbarComponent;
	let fixture: ComponentFixture<ExternalToolbarComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MatToolbarModule,
				MatButtonModule,
				RouterLink,
				ExternalToolbarComponent,
				RouterTestingModule,
			],
		});

		fixture = TestBed.createComponent(ExternalToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
