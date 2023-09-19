import { TestBed } from '@angular/core/testing';
import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	RouterStateSnapshot,
} from '@angular/router';

import { authCanActivateGuard } from './auth-can-activate.guard';

describe('authCanActivateGuard', () => {
	const executeGuard: CanActivateFn = (...guardParameters) =>
		TestBed.runInInjectionContext(() =>
			authCanActivateGuard(...guardParameters)
		);

	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should be created', () => {
		expect(executeGuard).toBeTruthy();
	});

	it('should return true', async () => {
		const result = await TestBed.runInInjectionContext(() =>
			authCanActivateGuard(
				{} as ActivatedRouteSnapshot,
				{} as RouterStateSnapshot
			)
		);
		expect(result).toBe(true);
	});
});
