import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeComponent } from './take.component';

describe('TakeComponent', () => {
	let component: TakeComponent;
	let fixture: ComponentFixture<TakeComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [TakeComponent],
		});
		fixture = TestBed.createComponent(TakeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
