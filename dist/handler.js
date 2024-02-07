'use strict';
//import * as lucid from 'lucid-health';
//const {ping} = lucid;
export const generateRandomNumber = async (event) => {
    const randomNumber = Math.random() * 100;
    console.log('randomNumber:', randomNumber);
    //ping();
    const body = JSON.stringify({ randomNumber });
    return {
        statusCode: 200,
        body
    };
};
//# sourceMappingURL=handler.js.map