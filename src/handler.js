'use strict';
export async function generateRandomNumber(event) {
  const randomNumber = parseInt(Math.random()*100);
  console.log('randomNumber',randomNumber);
  console.log(new moment());
  return randomNumber;
}
