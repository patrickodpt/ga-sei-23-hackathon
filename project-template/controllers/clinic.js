const express = require('express')

const cliniciansAPI = require('../models/clinicians.js')
const patientsAPI = require('../models/patients.js')
const dataAPI = require('../models/data.js')

const clinicRouter = express.Router()

//GET STARTS HERE
clinicRouter.get('/', (req, res) => {
  cliniciansAPI.getAllClinicians()
  .then((allClinicians) => res.render('allClinicians', {allClinicians}))
})

clinicRouter.get('/:clinicianId', (req, res) => {
  cliniciansAPI.getClinician(req.params.clinicianId)
  .then( (clinician) => {
      patientsAPI.getAllPatientsOfClinician(req.params.clinicianId)
      .then( (retrievedPatients) => {
        res.render('singleClinician', {clinician, retrievedPatients})
      })
  })
})

clinicRouter.get('/:clinicianId/:patientId', (req, res) => {
  patientsAPI.getPatient(req.params.patientId)
  .then( (patient) => {
    dataAPI.getAllDataOfPatient(req.params.patientId)
    .then( (retrievedData) => { res.render('singlePatient', {patient, retrievedData}) })
  })
})
// GET ENDS HERE

clinicRouter.put('/:clinicianId', (req, res) => {
  cliniciansAPI.updateClinician(req.params.clinicianId, req.body).then(
    () => {res.redirect(`/clinic/${req.params.clinicianId}`)}
  )
})

clinicRouter.put('/:clinicianId/:patientId', (req, res) => {
  patientsAPI.updatePatient(req.params.patientId, req.body).then(
    () => {res.redirect(`/clinic/${req.params.clinicianId}/${req.params.patientId}`)}
  )
})

clinicRouter.post('/', (req, res) => {
  cliniciansAPI.addNewClinician(req.body).then(
    () => {res.redirect('/clinic') }
  )
})

clinicRouter.post('/:clinicianId', (req, res) => {
  patientsAPI.addNewPatient(req.body, req.params.clinicianId).then(
    () => {res.redirect(`/clinic/${req.params.clinicianId}`) }
  )
})

clinicRouter.post('/:clinicianId/:patientId', (req, res) => {
  dataAPI.addNewData(req.body, req.params.patientId, req.params.clinicianId).then(
    () => {res.redirect(`/clinic/${req.params.clinicianId}/${req.params.patientId}`) }
  )
})


clinicRouter.delete('/:clinicianId', (req, res) => {
  cliniciansAPI.deleteClinician(req.params.clinicianId).then(
    () => {res.redirect('/')}
  )
})

clinicRouter.delete('/:clinicianId/:patientId', (req, res) => {
  patientsAPI.deletePatient(req.params.patientId).then(
    () => {res.redirect(`/clinic/${req.params.clinicianId}`)}
  )
})

clinicRouter.delete('/:clinicianId/:patientId/:dataId', (req, res) => {
  dataAPI.deleteData(req.params.dataId).then(
    () => {res.redirect(`/clinic/${req.params.clinicianId}/${req.params.patientId}`)}
  )
})

/* Step 5: Export the router from the file. */
module.exports = {
  clinicRouter
}
