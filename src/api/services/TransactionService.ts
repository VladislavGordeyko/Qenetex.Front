
import { ITransaction } from '../models/Transaction';
import ApiRouter from './ApiRouter';

interface ITransactionCreate {
  address_id: string
}

/** Service for Transactions  */
class TransactionService {
  /** Get all transactions */
  static list() {
    return ApiRouter.get<ITransaction[]>('/transaction');
  }

  /** Get transaction by address id */
  static getByAddress(addressId:string) {
    return ApiRouter.get<ITransaction[]>(`/transaction/address/${addressId}`);
  }

  /** Create random transaction */
  static createRandom() {
    return ApiRouter.post<ITransaction>('/transaction', {});
  }

  /** Create transaction with address */
  static create(address: ITransactionCreate) {
    return ApiRouter.post<ITransaction>('/address_transaction', address);
  }
}

export default TransactionService;