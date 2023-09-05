import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardSearchComponent } from './dashboard-search.component';

describe('DashboardSearchComponent', () => {
	let component: DashboardSearchComponent;
	let fixture: ComponentFixture<DashboardSearchComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				ReactiveFormsModule,
				MatFormFieldModule,
				MatInputModule,
				MatIconModule,
				DashboardSearchComponent,
				NoopAnimationsModule,
			],
		});

		fixture = TestBed.createComponent(DashboardSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
