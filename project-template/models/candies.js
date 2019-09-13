const mongoose = require('./connection.js')
//justin here
mongoose.set('useFindAndModify', false);

const CandyInfo = new mongoose.Schema(
  {
    category: String,
    prodName : String,
    handMach : String,
    natArt : String,
    image : String,
    description : String,
    countryOrig : String,
    stockOrder : String,
    coldNormal : String,
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
    shipDay : String,
    credNum : Number,
    shipAdd : String,
  }
)

const ShoppingCart = new mongoose.Schema(
  {
    prodName: String,
    prodID : String,
    cartID : String,
    cost: Number,
    quantity : Number
  }
)

const CandyCollection = mongoose.model('Candy', CandyInfo)
const CartCollection = mongoose.model('Cart', ShoppingCart)


const getAllCandy = () => { return CandyCollection.find() }
const getCandy = (candyId) => { return CandyCollection.findById(candyId) }
const getCandyByCategory = (selectedCat) => { return CandyCollection.find({category: selectedCat}) }
const getCartContents = () => { return CartCollection.find() }

const addNewCandy = (newCandy) => { return CandyCollection.insertMany([newCandy]) }
const addToCart = (newCart) => { return CartCollection.insertMany([newCart]) }

const clearCart = () => { return CartCollection.deleteMany({cartID : ''});


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
  getCartContents,

  addNewCandy,
  addToCart
}
