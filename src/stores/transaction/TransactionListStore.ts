import { action, makeAutoObservable, runInAction } from "mobx";
import { ITransaction } from "../../api/models/Transaction";
import TransactionService from "../../api/services/TransactionService";

/** Transaction Store */
class TransactionListStore {
    id: string = '';
    transactions: ITransaction[] | undefined;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    @action async fetch() {
        if (this.id) {
            await this.fetchTransactionsByAddressId(this.id);
        } else {
            await this.fetchTransactions();
        }
    }

    /** fetch all transactions from API */
    @action async fetchTransactions() {
        this.loading = true

        const { data } = await TransactionService.list();
        runInAction(() => {
            this.transactions = data;
        })
        this.loading = false
    }

    /** fetch transactions from API by address id */
    @action async fetchTransactionsByAddressId(addressId: string) {
        this.loading = true

        const { data } = await TransactionService.getByAddress(addressId);
        runInAction(() => {
            this.transactions = data;
        })
        this.loading = false
    }

    /** Send request to api to add random Transaction */
    @action async addTransaction() {
        await TransactionService.createRandom();
        this.fetch();
    }

    /** Send request to api to add Transaction with address */
    @action async addAddressTransaction() {
        await TransactionService.create({address_id: this.id});
        this.fetch();
    }
}

export default TransactionListStore;