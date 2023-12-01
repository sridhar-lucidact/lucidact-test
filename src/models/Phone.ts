import { Country, CountryPhoneCodes, PhoneType } from "../helpers/Enum.js";

interface IPhone {
    phoneNo: number;
    type: PhoneType;
    extNo?: number;
    countryCode: CountryPhoneCodes;
    isDefault: boolean;
}
const regEx = new RegExp(/^\d{10}$/);

export class Phone implements IPhone {
    phoneNo: number;
    type: PhoneType;
    extNo?: number;
    countryCode: CountryPhoneCodes;
    isDefault: boolean;
    constructor(phone: IPhone) {
        const { phoneNo } = phone;
        if (regEx.test(phoneNo.toString())) {
             throw new TypeError(errorMessage.INVALID_PHONENO);
        }
        this.phoneNo = phoneNo;
        this.type = phone.type || PhoneType.Unknown;        
        this.extNo = phone.extNo;
        this.countryCode = phone.countryCode || CountryPhoneCodes.US;
        this.isDefault = phone.isDefault || false;
    }    
}

enum errorMessage {
    INVALID_PHONENO = 'Invalid Phone Number. Valid Phone Number should have 10 digit numbers.'
}
