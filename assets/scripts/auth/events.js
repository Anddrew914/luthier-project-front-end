'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  console.log('events')
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('events')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  console.log('events')
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onAddInstrument = function (event) {
  console.log('events')
  event.preventDefault()
  const data = getFormFields(event.target)

  api.addInstrument(data)
    .then(ui.addInstrumentSuccess)
    .catch(ui.addInstrumentFailure)
}

const onViewInstruments = function () {
  console.log("events")
  event.preventDefault()
  api.viewInstruments()  // this returns an object that gets passed
  .then(ui.viewInstrumentsSuccess)
  .catch(ui.viewInstrumentsFailure)
}

const onDeleteInstrument = function (event) {
  console.log("events")
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteInstrument(data)  // this returns an object that gets passed
  .then(ui.deleteInstrumentSuccess)
  .catch(ui.deleteInstrumentFailure)
}

const onEditInstrument = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editInstrument(data)
    .then(ui.editInstrumentSuccess)
    .catch(ui.editInstrumentFailure)
}

const onRevealSignUp = function () {
  $('form#sign-up').animate({
    height: 'toggle'
  }, 200, function () {})
}

const onRevealSignIn = function () {
  $('form#sign-in').animate({
    height: 'toggle'
  }, 200, function () {})
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#add-instrument').on('submit', onAddInstrument)
  $('#view-instruments').on('submit', onViewInstruments)
  $('#delete-instrument').on('submit', onDeleteInstrument)
  $('#edit-instrument').on('submit', onEditInstrument)
  $('button#nav-sign-up').on('click', onRevealSignUp)

  $('button#nav-sign-in').on('click', onRevealSignIn)
}
module.exports = {
  addHandlers
}
