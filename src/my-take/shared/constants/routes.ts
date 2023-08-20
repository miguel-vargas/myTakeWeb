export class RouterPath {
	static readonly APP = 'app';
	static readonly DASHBOARD = 'dashboard';
	static readonly MY_TAKES = 'list';
	static readonly LOCATIONS = 'locations';
	static readonly LOGIN = 'login';
	static readonly SIGN_UP = 'sign-up';
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
