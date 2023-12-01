import express from 'express';
const patientRoute = express.Router();

patientRoute.get('/:patientId',(req, res) => {
    res.json({message: `Called PatientId: ${req.params.patientId}`})
});

export default patientRoute;