import React, { useEffect } from 'react';
import './index.css';
import './AddressItem.css';
import AddressItem from './AddressItem';
import Button from '../common/button';
import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react';
import Loader from '../common/loader' 

/** Address table component */
const AddressItems = () => {
    const { addressListStore: store } = useStores();

    /** fetch addresses from API */
    const fetchAddresses = async () => {
        try {
            await store.fetch()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAddresses()
    }, [])

    return(
        <div className="AddressItems">
            <Button onClick={() => store.addAddress()} title="+" />
            <div className="container-header">
                <span  className="element">Id</span>
                <span  className="element">Транзакции</span> 
            </div>
            {store.addresses ? store.addresses.map((item) => <AddressItem key={item.id} item={item} />) : <Loader isLoading />}
        </div>
    )
}

export default observer(AddressItems);