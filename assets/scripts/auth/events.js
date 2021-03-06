'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
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
  event.preventDefault()
  const data = getFormFields(event.target)

  api.addInstrument(data)
    .then(ui.addInstrumentSuccess)
    .catch(ui.addInstrumentFailure)
}

const onViewInstruments = function () {
  event.preventDefault()
  api.viewInstruments()  // this returns an object that gets passed
  .then(ui.viewInstrumentsSuccess)
  .catch(ui.viewInstrumentsFailure)
}

const onDeleteInstrument = function (event) {
  // const data = getFormFields(this)
  const instrumentPostId = event.target.dataset.id
  event.preventDefault()
  api.deleteInstrument(instrumentPostId)  // this returns an object that gets passed
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
  $('form#sign-in').hide()
  $('form#add-instrument').hide()
}

const onRevealSignIn = function () {
  $('form#sign-in').animate({
    height: 'toggle'
  }, 200, function () {})
  $('form#sign-up').hide()
  $('form#add-instrument').hide()
}

const onRevealChangePassword = function () {
  $('form#change-password').animate({
    height: 'toggle'
  }, 200, function () {})
  $('form#sign-up').hide()
  $('form#add-instrument').hide()
  $('form#edit-instrument').hide()
  $('form#sign-in').hide()
}

const onRevealAddInstrument = function () {
  $('form#add-instrument').animate({
    height: 'toggle'
  }, 200, function () {})
  $('form#sign-in').hide()
  $('form#sign-up').hide()
  $('form#edit-instrument').hide()
  $('form#change-password').hide()

}

const onRevealEdit = function () {
  $('form#edit-instrument').animate({
    height: 'toggle'
  }, 200, function () {})
  $('form#sign-in').hide()
  $('form#sign-up').hide()
  $('form#add-instrument').hide()
}

const addHandlers = () => {
  $('#instruments-div').on('click', '#delete-instrument', onDeleteInstrument)
  $('#sign-up').on('submit', onSignUp)
  $('#edit-instrument').on('submit', onEditInstrument)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('button#nav-change-password').on('click', onRevealChangePassword)
  $('button#sign-out').on('click', onSignOut)
  $('#add-instrument').on('submit', onAddInstrument)
  $('#view-instruments').on('click', onViewInstruments)
  $('button#nav-sign-up').on('click', onRevealSignUp)
  $('button#nav-sign-in').on('click', onRevealSignIn)
  $('button#nav-add-instrument').on('click', onRevealAddInstrument)
  $('button#nav-edit-instrument').on('click', onRevealEdit)
}
module.exports = {
  addHandlers
}
