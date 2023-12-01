import { EmailType } from "../helpers/Enum.js";

interface IEmail {
    emailId: string;    
    type: EmailType;
    isDefault: boolean;
}

const regEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export class Email implements IEmail {
    emailId: string;
    type: EmailType;
    isDefault: boolean;
    constructor(email: IEmail) {
        const { emailId } = email;
        if (regEx.test(emailId)) {
             throw Error();
        }
        this.emailId = emailId;
        this.type = email.type || EmailType.Unknown;
        this.isDefault = email.isDefault || false;
    }    
}