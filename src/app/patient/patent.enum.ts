export enum BooldGroup {
    APlus = 'A+',
    OPlus = 'O+',
    BPlus = 'B+',
    ABPlus = 'AB+',
    AMinus = 'A-',
    OMinus = 'O-',
    BMinus = 'B-',
    ABMinus = 'AB-'    
}

export enum CareTeamRoles {
    Nurse,
    PCP,
    RenderingDoctor,
    Staff
    //TODO move this to CareTeam model and import it from there
}

export enum DeviceStatus {
    //TODO: move this to device model and import it from there        
    Active,
    InActive,
    NotActivated,
    Suspend
}

export enum EnrollmentStatus {
    //TODO: move this to enrollment model and import it from there
    Enrolled,
    UnEnrrolled,
    Declined
}

export enum EyeColor {
    Amber,
    Black,
    Brown,
    Green,
    Grey,    
    Heterochromia,
    Red,        
    Violet    
}

export enum HealthInsuranceStatus {
    //TODO: move this to HealthInsurance model and import it from there
    Active,
    InActive
}

export enum HubType {
    //TODO: move this to device model and import it from there
    HubV1 = 'ECG',
    HubV2 = 'LiveCare',
    HubV3 = 'SmartMeter',
    HubV4 = 'Tenovi'
}

export enum PatientStatus {
    Active, 
    Enrolled,       
    InActive,
    Suspend
}