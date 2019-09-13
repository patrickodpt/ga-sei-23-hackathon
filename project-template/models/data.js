const mongoose = require('./connection.js')

mongoose.set('useFindAndModify', false);

//schema may need arrays to hold multiple data values
const DataSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      default: "Aug 28, 2019"
    },
    glucose: {
      type: Number
    },
    bP: {
      type: String
    },
    hRV: {
      type: Number
    },
    rHR: {
      type: Number
    },
    rR: {
      type: Number
    },
    patientID: String,
    clinicianID: String
  }
)

const DataCollection = mongoose.model('Data', DataSchema)

const getAllDataOfPatient = (patientID) => { return DataCollection.find({patientID: patientID}) }
const getDayData = (dataId) => { return DataCollection.findById(dataId) }
const addNewData = (newData, patientOfData, clinicianOfPatient) => {
  newData.patientID = patientOfData;
  newData.clinicianID = clinicianOfPatient;
  return DataCollection.insertMany([newData])
}
const deleteData = (dataId) => {
  return DataCollection.findByIdAndDelete(dataId)
}

/* Step 5: export all functions*/
module.exports = {
  getAllDataOfPatient,
  getDayData,
  addNewData,
  deleteData
}
