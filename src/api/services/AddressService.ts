import { IAddress } from '../models/Address';
import ApiRouter from './ApiRouter';

interface IAddressCreate {
  name: string
}

/** Service for Address  */
class AddressService {
  /** Get all addresses */
  static list() {
    return ApiRouter.get<IAddress[]>('/address');
  }

  /** Create address */
  static create(address: IAddressCreate) {
    return ApiRouter.post<IAddress>('/address', address);
  }
}

export default AddressService;