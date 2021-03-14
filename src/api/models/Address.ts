import { ITransaction } from "./Transaction";

export interface IAddress {
    id: string;
    name: string;
    transactions_from: ITransaction[],
    transactions_to: ITransaction[],
}