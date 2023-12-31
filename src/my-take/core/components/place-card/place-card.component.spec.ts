import { ComponentFixture, TestBed } from '@angular/core/testing';

import { placeMocks } from '@data/mocks/place-mocks';
import { Place } from '@data/models/place';
import { PlaceCardComponent } from './place-card.component';

const mockPlace: Place = placeMocks[0];

describe('PlaceCardComponent', () => {
	let component: PlaceCardComponent;
	let fixture: ComponentFixture<PlaceCardComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [PlaceCardComponent],
		});
		fixture = TestBed.createComponent(PlaceCardComponent);
		component = fixture.componentInstance;
		component.place = mockPlace;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
