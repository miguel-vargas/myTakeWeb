import { Address } from './address';

export interface Place {
	id: string;
	simpleId: number;
	name: string;
	description: string;
	address?: Address;
}
