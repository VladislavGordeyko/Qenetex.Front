import { IAddress } from '../models/Address';
import ApiRouter from './ApiRouter';

/** Service for Address  */
class AddressService {
  /** Get all addresses */
  static list() {
    return ApiRouter.get<IAddress[]>('/address');
  }

  /** Create address */
  static create() {
    return ApiRouter.post<IAddress>('/address', {});
  }
}

export default AddressService;