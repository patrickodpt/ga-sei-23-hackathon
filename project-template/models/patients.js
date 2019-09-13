const mongoose = require('./connection.js')

mongoose.set('useFindAndModify', false);

/* Step 2: create model schema */
const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: '{PATH} is required.'
    },
    dateOfBirth: {
      type: String,
      default: "Mar 15, 1989"
    },
    primaryDiagnosis: {
      type: String,
    },
    clinicianID: String
  }
)

const PatientCollection = mongoose.model('Patient', PatientSchema)


const getAllPatientsOfClinician = (clinicianID) => { return PatientCollection.find({clinicianID: clinicianID}) }
const getPatient = (patientId) => { return PatientCollection.findById(patientId) }
const addNewPatient = (newPatient, clinicianOfPatient) => {
  newPatient.clinicianID = clinicianOfPatient;
  return PatientCollection.insertMany([newPatient])
}
const updatePatient = (patientId, patientUpdate) => {
  return PatientCollection.findByIdAndUpdate(patientId, patientUpdate)
}
const deletePatient = (patientId) => {
  return PatientCollection.findByIdAndDelete(patientId)
}

/* Step 5: export all functions*/
module.exports = {
  getAllPatientsOfClinician,
  getPatient,
  addNewPatient,
  updatePatient,
  deletePatient
}
