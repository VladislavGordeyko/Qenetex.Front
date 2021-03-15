import { action, makeAutoObservable, runInAction } from "mobx";
import { IAddress } from "../../api/models/Address";
import AddressService from "../../api/services/AddressService";

/** Address Store */
class AddressListStore {
    addresses: IAddress[] | undefined;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    /** fetch addresses from API */
    @action async fetch() {
        this.loading = true

        const { data } = await AddressService.list();
        runInAction(() => {
            this.addresses = data;
        })
        this.loading = false
    }

    /** Send request to add address */
    @action async addAddress() {
        await AddressService.create();    
        await this.fetch()
    }
}

export default AddressListStore;