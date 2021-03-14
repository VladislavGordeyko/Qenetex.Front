import React, {useEffect, useState} from 'react';
import './index.css';
import './AddressItem.css';
import {IAddress} from "../../api/models/Address";
import AddressItem from './AddressItem';
import AddressService from '../../api/services/AddressService';
import Button from '../common/button';

/** Address table component */
const AddressItems = () => {
    const [addresses, setAddresses] = useState<IAddress[]>();

    /** fetch addresses from API */
    const fetchAddresses = async () => {
        try {
            const res = await AddressService.list();
            setAddresses(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAddresses()
    }, [])

    /** Send request to add address */
    const addAddress = async () => {
        try {
            await AddressService.create({name: '123'});
            fetchAddresses()
        } catch (error) {
            console.log(error)
        }      
    }

    return(
        <div className="AddressItems">
            <Button onClick={addAddress} title="+" />
            <div className="container-header">
                <span  className="element">Id</span>
                <span  className="element">Транзакции</span> 
            </div>
            {addresses && addresses.map((item) => <AddressItem key={item.id} item={item} />)}
        </div>
    )
}

export default AddressItems;