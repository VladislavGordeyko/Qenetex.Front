import React from 'react';
import './AddressItem.css';
import {IAddress} from "../../api/models/Address";
import { Link } from 'react-router-dom';


interface IAddressItem {
    item: IAddress
}

const AddressItem = ({item} : IAddressItem) => {
    const getTransactionNumber = () => {
        return item.transactions_from.length + item.transactions_to.length
    }
    return(
        <div className="container">
            <span className="element"><Link to={`/transaction/${item.id}`}>{item.id}</Link></span>
            <span className="element">{getTransactionNumber()}</span>
        </div>
    )
}

export default AddressItem;