'use strict';

module.exports.generateRandomNumber = async (event) => {
  const randomNumber = parseInt(Math.random()*100);
  console.log('randomNumber',randomNumber);
  return randomNumber;
};
