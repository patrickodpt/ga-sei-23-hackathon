const mongoose = require('./connection.js')
//justin here
mongoose.set('useFindAndModify', false);

const CandyInfo = new mongoose.Schema(
  {
    category: String,
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
    custName : String,
    shipDay : Boolean,
    credNum : Number,
    shipAdd : String,
  }
)

const ShoppingCart = new mongoose.Schema(
  {
    prodID : String,
    cartID : String,
    quanttity : Number
  }
)

const CandyCollection = mongoose.model('Candy', CandyInfo)
const OrderCollection = mongoose.model('Order', OrderInfo)
const CartCollection = mongoose.model('Cart', ShoppingCart)

const getAllCandy = () => { return CandyCollection.find() }
const getCandy = (candyId) => { return CandyCollection.findById(candyId) }
const getCandyByCategory = (selectedCat) => { return CandyCollection.find({category: selectedCat}) }

const addNewCandy = (newCandy) => { return CandyCollection.insertMany([newCandy]) }
const addCandyToCart = (addCandy) => { return CartCollection.insertMany([addCandy]) }


// const updateClinician = (clinicianId, updatedClinician) => {
//   return ClinicianCollection.findByIdAndUpdate(clinicianId, updatedClinician)
// }
// const deleteClinician = (clinicianId) => {
//   return ClinicianCollection.findByIdAndDelete(clinicianId)
// }

module.exports = {
  getAllCandy,
  getCandy,
  getCandyByCategory,

  addNewCandy,
  addCandyToCart
}
