import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './toolbar.component';

describe('ExternalToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MatToolbarModule,
				MatButtonModule,
				RouterLink,
				ToolbarComponent,
				RouterTestingModule,
			],
		});

		fixture = TestBed.createComponent(ToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
