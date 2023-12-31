import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakesComponent } from './takes.component';

describe('TakesComponent', () => {
	let component: TakesComponent;
	let fixture: ComponentFixture<TakesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TakesComponent],
		});
		fixture = TestBed.createComponent(TakesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
