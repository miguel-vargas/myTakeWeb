export class RouterPath {
	static readonly DASHBOARD = 'dashboard';
	static readonly TAKES = 'takes';
	static readonly PLACES = 'places';
}

// Not currently in use (maybe a sidenav?)
export const ROUTES = [
	{
		label: 'Dashboard',
		// icon: PrimeIcons.TH_LARGE,
		routerLink: [RouterPath.DASHBOARD],
	},
];
