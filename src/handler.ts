'use strict';
import {APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
//import * as lucid from 'lucid-health';
//const {ping} = lucid;
export const generateRandomNumber: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const randomNumber = Math.random()*100;
  console.log('randomNumber:',randomNumber, process.env.NODE_PATH);  
  //ping();
  const body = JSON.stringify({randomNumber, path: process.env.NODE_PATH});
  return {
    statusCode: 200,
    body
  };
};
