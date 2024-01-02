import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FORM_CONFIG } from '@core/constants/form-config';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [SearchComponent, NoopAnimationsModule],
		});
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should emit searched term on form update', fakeAsync(() => {
		// arrange
		const mockValue = 'searchedValue';
		const spy = jest.spyOn(component.searched, 'emit');
		
		// act
		component.searchForm.controls.searchTerm.setValue(mockValue);
    	tick(FORM_CONFIG.defaultDebounceTime);

		// assert
		expect(spy).toHaveBeenCalledWith(mockValue.toLowerCase());
	}));
});
