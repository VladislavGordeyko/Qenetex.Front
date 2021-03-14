import React from 'react';
import './TransactionItem.css';
import { ITransaction } from '../../api/models/Transaction';

/** Props */
interface ITransactionItem {
    item: ITransaction
}

/** Trasaction item component */
const TransactionItem = ({item} : ITransactionItem) => {
    return(
        <div className="container">
            <span className="element">{item.id}</span>
            <span className="element">{item.addr_from_id}</span>
            <span className="element">{item.addr_to_id}</span>
            <span className="element">{item.value}</span>
            <span className="element">{item.date}</span>
        </div>
    )
}

export default TransactionItem;