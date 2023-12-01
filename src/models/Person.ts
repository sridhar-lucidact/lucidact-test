import { Gender } from "../helpers/Enum.js";
import { DateOnly } from "../helpers/Type.js";
import { Contact } from "./Contact.js";

export interface Person {
    firstName: string;    
    lastName: string;
    gender: Gender;
    dateOfBirth?: DateOnly;
    contact?: Contact;
}