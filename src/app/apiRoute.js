import express from 'express';
const apiRoute = express.Router();
import patientRoute from './patient/patient.routes.js';

apiRoute.use('/patient', patientRoute);
//apiRoute.use('/user', userRoute);
//apiRoute.use('/org', orgRoute);
//apiRoute.use('/template', templateRoute);
//apiRoute.use('/service', serviceRoute);
//apiRoute.use('/report', reportRoute);
//apiRoute.use('/list', listRoute);

export default apiRoute;
