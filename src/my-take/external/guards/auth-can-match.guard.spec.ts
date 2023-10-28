import { TestBed } from '@angular/core/testing';
import { CanMatchFn, Route, provideRouter } from '@angular/router';
import { RouterPath } from '@external/constants/routes';
import { LoginComponent } from '@external/features/login/login.component';
import { authCanMatchGuard } from './auth-can-match.guard';

describe('authCanMatchGuard', () => {
	const routes: Route[] = [
		{ path: RouterPath.LOGIN, component: LoginComponent },
	];

	const executeGuard: CanMatchFn = (...guardParameters) =>
		TestBed.runInInjectionContext(() => authCanMatchGuard(...guardParameters));

	beforeEach(async () => {
		TestBed.configureTestingModule({
			providers: [provideRouter(routes)],
		});
	});

	it('should be created', () => {
		expect(executeGuard).toBeTruthy();
	});

	it('should return true', async () => {
		const result = await TestBed.runInInjectionContext(() =>
			authCanMatchGuard({}, [])
		);
		expect(result).toBe(true);
	});
});
