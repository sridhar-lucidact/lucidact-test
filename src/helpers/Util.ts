import { DurationFormat } from "./Enum.js";


export interface ageOptions {    
    format: DurationFormat
}

export class Util {
    dateDiff(fromDate: Date, toDate: Date, format: DurationFormat = DurationFormat.Days): number {
        return 0;
    }

    
    age(date: Date, options: ageOptions = {format: DurationFormat.Integer}): number | string {
        const yrs = this.dateDiff(date, new Date(), DurationFormat.Years);
        
        return (
                options.format === DurationFormat.Integer || 
                options.format === DurationFormat.Default
               )? parseInt(yrs.toString()) : yrs;
    }
}