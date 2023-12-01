const ERR_IDATEONLY = `Argument of given type  is not assignable to parameter of type 'DateOnly'. Valid format should be a valid date in YYYY-MM-DD format`;

export class DateOnly {
    constructor(isoDate: string) {
        const dateRegEx = new RegExp(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/);
        let isError = false;
        isError =  !dateRegEx.test(isoDate);
        if (!isError) {
            const [year, month, date] = isoDate.split('-').map(r => parseInt(r));
            if (    
                    month === 2 &&
                    date > 28 &&
                    !(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
               ) {
                   isError = true;
               }
        }
        if (isError)
            throw ERR_IDATEONLY;
        else
            return new Date(isoDate);
    }
}
