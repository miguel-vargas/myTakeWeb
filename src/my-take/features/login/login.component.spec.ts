import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterOutlet, LoginComponent],
		});

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
