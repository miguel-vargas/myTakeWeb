import { TestBed } from '@angular/core/testing';
import { PlaceService } from './place.service';

describe('PlaceService', () => {
	let service: PlaceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PlaceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('getPlaces', () => {
		// it('should return places', () => {
		// 	const places$ = service.getPlaces();
		// 	expect(places$).toBe(of(placeMocks));
		// });
	});

	describe('getPlaces', () => {
		describe('when place is found', () => {
			// it('should return a place', () => {
			// 	const place$ = service.getPlaceById('o');
			// 	expect(place$).toBeNull();
			// });
		});

		describe('when place is not found', () => {
			// it('should return a place', () => {
			// 	const place$ = service.getPlaceById('o');
			// 	expect(place$).toThrow(new Error('Place not found.'));
			// });
		});
	});
});
