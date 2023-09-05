import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ExternalToolbarComponent } from './external-toolbar/external-toolbar.component';
import { ExternalComponent } from './external.component';

describe('ExternalComponent', () => {
	let component: ExternalComponent;
	let fixture: ComponentFixture<ExternalComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				ExternalToolbarComponent,
				RouterOutlet,
				RouterTestingModule,
				ExternalComponent,
			],
		});

		fixture = TestBed.createComponent(ExternalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
