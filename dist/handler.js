'use strict';
export const generateRandomNumber = async (event) => {
    const randomNumber = Math.random() * 100;
    console.log('randomNumber', randomNumber);
    return {
        status: 200,
        body: {
            randomNumber
        }
    };
};
//# sourceMappingURL=handler.js.map