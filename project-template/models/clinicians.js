const mongoose = require('./connection.js')
//justin here
mongoose.set('useFindAndModify', false);

const CandyInfo = new mongoose.Schema(
  {
    prodName : String,
    handMach : Boolean,
    natArt : Boolean,
    image : String,
    description : String,
    countryOrig : String,
    stockOrder : Boolean,
    coldNormal : Boolean,
    shelfLife : Number,
    manComp : String,
    cost : Number,
    weight : Number,
    minOrder : Number
    }
)

const OrderInfo = new mongoose.Schema(
  {
    prodName : String,
    prodID : String,
    quantity : Number,
    stockOrder : Boolean,
    shipDay : Boolean,
    credNum : Number,
    shipAdd : String,
  }
)

const CandyCollection = mongoose.model('Candy', CandyInfo)

const getAllCandy = () => { return CandyCollection.find() }
const getCandy = (candyId) => { return CandyCollection.findById(candyId) }

 const addNewCandy = (newCandy) => { return CandyCollection.insertMany([newCandy]) }
// const updateClinician = (clinicianId, updatedClinician) => {
//   return ClinicianCollection.findByIdAndUpdate(clinicianId, updatedClinician)
// }
// const deleteClinician = (clinicianId) => {
//   return ClinicianCollection.findByIdAndDelete(clinicianId)
// }

module.exports = {
  getAllCandy,
  getCandy,
  addNewCandy
}
