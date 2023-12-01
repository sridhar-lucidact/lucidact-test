'use strict';
import {APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
export const generateRandomNumber: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const randomNumber = Math.random()*100;
  console.log('randomNumber',randomNumber);  
  return {
    statusCode: 200,
    body: {
      randomNumber
    }
  };
};
