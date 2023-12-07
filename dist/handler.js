'use strict';
import { ping } from 'lucid';
//const {ping} = lucid;
export const generateRandomNumber = async (event) => {
    const randomNumber = Math.random() * 100;
    console.log('randomNumber', randomNumber);
    console.log(typeof ping);
    console.log(ping);
    ping();
    const body = JSON.stringify({ randomNumber });
    return {
        statusCode: 200,
        body
    };
};
//# sourceMappingURL=handler.js.map