export interface Address {
	addressLine1: string;
	addressLine2?: string;
	addressLine3?: string;
	city: string;
	state: string;
	zipCode: string;
	zipCodeExt?: string;
	country: string;
}
