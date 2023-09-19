import { CanMatchFn } from '@angular/router';

export const authCanMatchGuard: CanMatchFn = (route, segments) => {
	return true;
};
