/*import { Controller } from "../../controllers/controller.js";
import { Patient } from "./patient.model.js";

export class PatientCreateController extends Controller {

    constructor(patientRecord: Patient) {
        super();
        const patient = new Patient(patientRecord);
    }

    private processRules() {

    }

    private validate() {

    }

    process() {
        this.processRules('before');
        //businesslosgic
        this.save();

        this.processRules('after');
    }

    beforeTransaction(): void {
                
    }    

    create() {
        this.beforeTransaction()
    }
}*/