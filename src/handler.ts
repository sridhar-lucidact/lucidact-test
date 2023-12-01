'use strict';
import {APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
import lucid from 'lucid';
//const {ping} = lucid;
export const generateRandomNumber: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const randomNumber = Math.random()*100;
  console.log('randomNumber',randomNumber);  
  console.log('lucid',lucid);
  console.log(typeof lucid.ping);  
  console.log(lucid.ping);
  lucid.ping();
  const body = JSON.stringify({randomNumber});
  return {
    statusCode: 200,
    body
  };
};
