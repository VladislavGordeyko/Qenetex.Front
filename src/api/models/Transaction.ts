import { IAddress } from "./Address";

/** Transaction model */
export interface ITransaction {
    id: string;
    date: Date;
    value: number;
    addr_from_id: IAddress;
    addr_to_id: IAddress
}