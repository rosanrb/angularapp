import { Address } from '../services/address-book/addresses.types';

export function changeOldAddress(newAddress: Address, oldAddress: Address, addresses: Address[]): Address[] {
    const updatedAddresses = [];
    addresses.forEach(address => {
        address !== oldAddress ? updatedAddresses.push(address) : updatedAddresses.push(newAddress);
    });
    return updatedAddresses;
}
