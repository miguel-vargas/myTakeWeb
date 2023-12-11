export class RouterPath {
	static readonly DASHBOARD = 'dashboard';
	static readonly ALL_TAKES = 'all-takes';
	static readonly PLACES = 'places';
	static readonly PLACE_BY_PLACE_ID = 'places/:placeId';
	static readonly TAKES_BY_PLACE_ID = 'places/:placeId/takes';
	static readonly TAKE_BY_TAKE_ID = 'places/:placeId/takes/:takeId';
}

// Not currently in use (maybe a sidenav?)
export const ROUTES = [
	{
		label: 'Dashboard',
		// icon: PrimeIcons.TH_LARGE,
		routerLink: [RouterPath.DASHBOARD],
	},
];
