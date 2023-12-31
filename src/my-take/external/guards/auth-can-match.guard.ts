import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { RouterPath } from '../constants/routes';

export const authCanMatchGuard: CanMatchFn = () => {
	const router: Router = inject(Router);

	return true || router.createUrlTree([RouterPath.LOGIN]);
};
