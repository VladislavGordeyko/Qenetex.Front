import React, { useEffect } from 'react';
import './index.css';
import './TransactionItem.css';
import TransactionItem from './TransactionItem';
import Button from '../common/button';
import { useParams } from 'react-router';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/useStores';
import Loader from '../common/loader';

/** Parametres of route */
interface ParamTypes {
    id: string
  }

/** Transactions table component */
const TransactionItems = () => {
    const { transactionListStore: store } = useStores();
    const { id }= useParams<ParamTypes>();

    useEffect(() => {
        store.id = id;
        store.fetch();
    }, [id])


    return(
        <div className="TransactionItems">
            <Button onClick={() => id ? store.addAddressTransaction(): store.addTransaction()} title="+" />
            <div className="container-header">
                <span  className="element">Id</span>
                <span  className="element">Адресс отправителя</span>
                <span  className="element">Адресс получателя</span>
                <span  className="element">Сумма</span>
                <span  className="element">Дата</span> 
            </div>
            {store.transactions ? store.transactions.map((item) => <TransactionItem key={item.id} item={item} />) : <Loader isLoading />}
        </div>
    )
}

export default observer(TransactionItems);