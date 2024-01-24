import { Gender, Program } from '../../helpers/Enum.js'
import { Contact } from '../../models/Contact.js';
/*import { Person } from '../../models/Person.js';*/
import { Util } from '../../helpers/Util.js';
import { PatientStatus } from './patent.enum.js';
import { IPatient, PatientState, PatientDevice, Demographics, HealthInsurance, CareTeamMember, Family, EmergencyContact } from './patient.interface.js';
import { DateOnly } from '../../helpers/Type.js';
const util = new Util();

export class Patient implements IPatient {
    readonly id?: string;
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

    constructor(patient: IPatient) {        
        this.firstName = patient.firstName;
        this.middleName = patient.middleName;
        this.lastName = patient.lastName;
        this.fullName = `${this.firstName} ${this.middleName || ''} ${this.lastName}`;
        this.gender = patient.gender || Gender.Unknown;
        this.dateOfBirth = patient.dateOfBirth;
        this.age = +(util.age(<Date>this.dateOfBirth));
        if (patient.contact) {
            this.contact = new Contact(patient.contact);
        }
        this.id = patient.id;
        this.orgid = patient.orgid;
        this.mrn = patient.mrn;           
        this.status = patient.status || PatientStatus.Active;
        this.currentState = patient.currentState;// || {isDeceased: false, isReachable: true};
        this.device = patient.device;
        this.demographics = patient.demographics;     
        this.careTeam = patient.careTeam;
        this.healthInsurance = patient.healthInsurance;        
        this.family = patient.family;
        this.emergencyContact = patient.emergencyContact;
        this.preferredPharmacy = patient.preferredPharmacy;
        this.tags = patient.tags;
    }
    
    isProgramEnrolled(program: Program) {
        return this.currentState.enrollments && 
               this.currentState.enrollments?.findIndex(r => r.programId === program) >= 0;
    }    
    isReachable() {
        return this.currentState.isReachable;
    }    
}