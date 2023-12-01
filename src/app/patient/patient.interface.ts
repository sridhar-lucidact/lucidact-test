import { Gender, PersonRelationType, Program } from "../../helpers/Enum.js";
import { DateOnly } from "../../helpers/Type.js";
import { Contact } from "../../models/Contact.js";
import { Person } from "../../models/Person.js";
import { BooldGroup, CareTeamRoles, DeviceStatus, EnrollmentStatus, EyeColor, HealthInsuranceStatus, HubType, PatientStatus } from "./patent.enum.js";


export interface CareTeamMember {
    //TODO move this to CareTeam model and import it from there
    userId: string;
    role: CareTeamRoles[];
    isPrimary: boolean;
}

export interface Demographics {
    height?: number;
    weight?: number;
    eyeColor?: EyeColor;
    bloodGroup?: BooldGroup;
}

export interface Enrollment {
    //TODO: move this to enrollment model and import it from there
    programId: Program;
    startDate: DateOnly;
    endDate?: DateOnly;
    status: EnrollmentStatus;
    inactiveReason?: string;
}

export interface EmergencyContact {    
    person: Person;
    careCenter?: string;//TODO: Change this to CareCenter or Organization Model
    relation: PersonRelationType;
    isPrimary: boolean;
}

export interface Family {
    person: Person;
    relation: PersonRelationType;
}

export interface HealthInsurance {
    //TODO: move this to HealthInsurance model and import it from there
    company: string;
    insuranceNo: string;
    groupNo?: string;
    dateIssued?: DateOnly;
    dateExpired: DateOnly;
    isPrimaryInsurance: boolean;
    status: HealthInsuranceStatus;
    isVerified: boolean;
    dateVerified?: Date;
    primaryHolder?: Person;
}

export interface PatientDevice {
    deviceId: string;
    orderNo: string;
    hubType: HubType;
    sourceId?: string;    
    status: DeviceStatus;
}

export interface PatientState {
    isDeceased: boolean;
    dateDeceased?: DateOnly;
    isReachable: string;
    enrollments?: Enrollment[];
    lastContact?: Date;
    nextContact?: Date;    
}

export interface IPatient extends Person {
    id?: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    readonly fullName: string;
    gender: Gender;
    dateOfBirth: DateOnly;
    readonly age: number;
    contact?: Contact;    
    mrn?: string;
    orgid: string;   
    status: PatientStatus;
    currentState: PatientState;
    device?: PatientDevice[];
    demographics?: Demographics;
    healthInsurance?: HealthInsurance[];
    careTeam?: CareTeamMember[];
    family?: Family[];
    emergencyContact?: EmergencyContact[];
    preferredPharmacy?: string;//TODO: Change this to Pharmacy or Organization model
    tags?: string[];
}
