import { AddressType, Country, EmailType, PhoneType, WeekDays } from "../helpers/Enum.js";
import { Address } from "./Address.js";
import { Email } from "./Email.js";
import { Phone } from "./Phone.js";

interface IContact {
    address?: Address[];
    email?: Email[];
    phone?: Phone[];        
    doNotContact?: boolean;
    smsOK?: boolean;
    smartSmsOk?: boolean;
    preferredStartTime?: string;
    preferredEndTime?: string;
    preferredDays?: WeekDays[]; 
}

export class Contact implements IContact {
    address?: Address[];
    email?: Email[];
    phone?: Phone[];        
    doNotContact?: boolean;
    smsOK?: boolean;
    smartSmsOk?: boolean;
    preferredStartTime?: string;
    preferredEndTime?: string;
    preferredDays?: WeekDays[]; 
    constructor(contact: IContact) {      
        if ([this.address,this.email,this.phone].some(p => p !== undefined)) {
            const { address, email, phone } = contact;
            
            if (Array.isArray(address) && address.length) {
                address.forEach(addressRec => {
                    this.address?.push({...addressRec});    
                });            
            }

            if (Array.isArray(email) && email.length) {
                email.forEach(emailRec => {
                    this.email?.push(new Email(emailRec));    
                });            
            }

            if (Array.isArray(phone) && phone.length) {
                phone.forEach(phoneRec => {
                    this.phone?.push(new Phone(phoneRec));    
                });            

                if (this.phone?.find(phoneRec => phoneRec.type === PhoneType.Mobile)) {
                    this.smsOK = contact.smsOK || false;
                    this.smartSmsOk = contact.smartSmsOk || false;
                }
                this.preferredStartTime = contact.preferredStartTime;
                this.preferredEndTime = contact.preferredEndTime;
                this.preferredDays = contact.preferredDays; 
            }                             
        } 
    }   
}