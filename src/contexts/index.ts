import React from 'react';

import { AddressListStore, TransactionListStore } from '../stores';

export const storesContext = React.createContext({
    addressListStore: new AddressListStore(),
    transactionListStore: new TransactionListStore()
})