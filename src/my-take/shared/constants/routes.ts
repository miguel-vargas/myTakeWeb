export class RouterPath {
	static readonly DASHBOARD = 'dashboard';
	static readonly MY_TAKES = 'my-takes';
	static readonly LOCATIONS = 'locations';
	static readonly LOGIN = 'login';
}

export const ROUTES = [
	{
		label: 'Dashboard',
		// icon: PrimeIcons.TH_LARGE,
		routerLink: [RouterPath.DASHBOARD],
	},
	{
		label: 'My Takes',
		routerLink: [RouterPath.MY_TAKES],
	},
	{
		label: 'Locations',
		routerLink: [RouterPath.LOCATIONS],
	},
];
