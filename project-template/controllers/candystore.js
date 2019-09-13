const express = require('express')

const candyAPI = require('../models/candies.js')
// const patientsAPI = require('../models/patients.js')
// const dataAPI = require('../models/data.js')

<<<<<<< HEAD
const clinicRouter = express.Router()

//GET STARTS HERE
clinicRouter.get('/', (req, res) => {
  cliniciansAPI.getAllClinicians()
  .then((allClinicians) => res.render('allClinicians', {allClinicians}))
})
=======
const candyRouter = express.Router()
//Alex test comment. Delete if needed.
>>>>>>> a44ab4f43022508e4ede418afbf5df5f4d68e5e1

//GET STARTS HERE
candyRouter.get('/info', (req,res) => {
  res.render('companyInfo')
})

candyRouter.get('/', (req, res) => {
  candyAPI.getAllCandy()
  .then((allCandy) => res.render('allProducts', {allCandy}))
})

candyRouter.get('/categories/:category', (req, res) => {
  candyAPI.getCandyByCategory(req.params.category)
  .then((allCandy) => res.render('categories', {allCandy}))
})

candyRouter.get('/:candyId', (req, res) => {
  candyAPI.getCandy(req.params.candyId)
  .then( (candy) => {
      res.render('singleCandy', {candy})
  })
})


// GET ENDS HERE
//
// candyRouter.put('/:clinicianId', (req, res) => {
//   cliniciansAPI.updateClinician(req.params.clinicianId, req.body).then(
//     () => {res.redirect(`/clinic/${req.params.clinicianId}`)}
//   )
// })
//
// candyRouter.put('/:clinicianId/:patientId', (req, res) => {
//   patientsAPI.updatePatient(req.params.patientId, req.body).then(
//     () => {res.redirect(`/clinic/${req.params.clinicianId}/${req.params.patientId}`)}
//   )
// })

candyRouter.post('/', (req, res) => {
  candyAPI.addNewCandy(req.body).then(
    () => {res.redirect('/cowbellcandy') }
  )
})

// candyRouter.post('/:clinicianId', (req, res) => {
//   patientsAPI.addNewPatient(req.body, req.params.clinicianId).then(
//     () => {res.redirect(`/clinic/${req.params.clinicianId}`) }
//   )
// })

// candyRouter.post('/:clinicianId/:patientId', (req, res) => {
//   dataAPI.addNewData(req.body, req.params.patientId, req.params.clinicianId).then(
//     () => {res.redirect(`/clinic/${req.params.clinicianId}/${req.params.patientId}`) }
//   )
// })


// candyRouter.delete('/:clinicianId', (req, res) => {
//   cliniciansAPI.deleteClinician(req.params.clinicianId).then(
//     () => {res.redirect('/')}
//   )
// })
//
// candyRouter.delete('/:clinicianId/:patientId', (req, res) => {
//   patientsAPI.deletePatient(req.params.patientId).then(
//     () => {res.redirect(`/clinic/${req.params.clinicianId}`)}
//   )
// })

/* Step 5: Export the router from the file. */
module.exports = {
  candyRouter
}
