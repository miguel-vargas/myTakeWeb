import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlacesComponent } from './places.component';

describe('PlacesComponent', () => {
	let component: PlacesComponent;
	let fixture: ComponentFixture<PlacesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [PlacesComponent, NoopAnimationsModule],
		});
		fixture = TestBed.createComponent(PlacesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
