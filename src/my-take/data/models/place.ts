import { Address } from "./address";

export interface Place {
    id: string,
    name: string,
    description: string,
    address?: Address,
}