import React, {useEffect, useState} from 'react';
import './index.css';
import './TransactionItem.css';
import { ITransaction } from '../../api/models/Transaction';
import TransactionService from '../../api/services/TransactionService';
import TransactionItem from './TransactionItem';
import Button from '../common/button';
import { useParams } from 'react-router';

/** Parametres of route */
interface ParamTypes {
    id: string
  }

/** Transactions table component */
const TransactionItems = () => {
    const {id}= useParams<ParamTypes>();
    const [transactions, setTransactions] = useState<ITransaction[]>();

    /** fetch transactions from API */
    const fetch = () => {
        if (id) {
            fetchTransactionsByAddressId(id)
        } else {
            fetchTransactions()
        }
    }

    /** fetch all transactions from API */
    const fetchTransactions = async () => {
        try {
            const res = await TransactionService.list();
            setTransactions(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    /** fetch transactions from API by address id */
    const fetchTransactionsByAddressId = async (addressId: string) => {
        try {
            const res = await TransactionService.getByAddress(addressId);
            setTransactions(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetch()
    }, [id])

    /** Send request to api to add random Transaction */
    const addTransaction = async () => {
        try {
            await TransactionService.createRandom();
            fetch()
        } catch (error) {
            console.log(error)
        }
    }

    /** Send request to api to add Transaction with address */
    const addAddressTransaction = async () => {
        try {
            await TransactionService.create({address_id: id});
            fetch()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="TransactionItems">
            <Button onClick={id ? addAddressTransaction : addTransaction} title="+" />
            <div className="container-header">
                <span  className="element">Id</span>
                <span  className="element">Адресс отправителя</span>
                <span  className="element">Адресс получателя</span>
                <span  className="element">Сумма</span>
                <span  className="element">Дата</span> 
            </div>
            {transactions && transactions.map((item) => <TransactionItem key={item.id} item={item} />)}
        </div>
    )
}

export default TransactionItems;