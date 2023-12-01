import { AddressType, Country, StatesOfUSA } from "../helpers/Enum.js";

/* interface IAddress {
    houseNo?: string;
    streetName: string;
    landMark?: string;
    city: string;
    state: StatesOfUSA | string;
    country: Country;
    zipCode?: string;
    longLat?: string;
    addressType: AddressType;
    isDefault: boolean;
}
 */
export type Address = {
    houseNo?: string;
    streetName: string;
    landMark?: string;
    city: string;
    state: Country extends Country.UnitedStates? StatesOfUSA : string;
    country: Country;
    zipCode: string;
    longLat?: string;
    addressType: AddressType;
    isDefault: boolean;
}
/* export class IIAddress implements IAddress {
    houseNo?: string | undefined;
    streetName: string;
    landMark?: string | undefined;
    city: string;
    state: string;
    country: Country;
    zipCode?: string;
    longLat?: string | undefined;
    addressType: AddressType;
    isDefault: boolean;
    constructor(address: IAddress) {
        this.houseNo = address.houseNo;
        this.streetName = address.streetName;
        this.landMark = address.landMark;
        this.city = address.city;
        this.state = address.state;
        this.country = address.country || Country.UnitedStates;
        if (this.country === Country.UnitedStates && !Object.values(StatesOfUSA).find(s => s === this.state)) {
            throw Error();
        }
        this.zipCode = address.zipCode;
        this.longLat = address.longLat;
        this.addressType = address.addressType || AddressType.Unknown;
        this.isDefault = address.isDefault || false;
    }

} */