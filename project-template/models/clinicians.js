const mongoose = require('./connection.js')
//justin here
mongoose.set('useFindAndModify', false);

const ClinicianSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    startDate: {
      type: String,
      default: "Jan 01, 1971"
    },
    role: {
      type: String,
    }
  }
)

const ClinicianCollection = mongoose.model('Clinician', ClinicianSchema)

const getAllClinicians = () => { return ClinicianCollection.find() }
const getClinician = (clinicianId) => { return ClinicianCollection.findById(clinicianId) }
const addNewClinician = (newClinician) => { return ClinicianCollection.insertMany([newClinician]) }
const updateClinician = (clinicianId, updatedClinician) => {
  return ClinicianCollection.findByIdAndUpdate(clinicianId, updatedClinician)
}
const deleteClinician = (clinicianId) => {
  return ClinicianCollection.findByIdAndDelete(clinicianId)
}

module.exports = {
  getAllClinicians,
  getClinician,
  addNewClinician,
  updateClinician,
  deleteClinician
}
