'use strict'
const store = require('../store.js')
const showInstrumentsTemplate = require('../templates/instruments.handlebars')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const refreshInstrumentDiv = () => {

  api.viewInstruments()  // this returns an object that gets passed
  .then(viewInstrumentsSuccess)
  const showInstrumentsHtml = showInstrumentsTemplate({ instruments: store.instruments })
  $('#instruments-div').text('')
  $('#instruments-div').append(showInstrumentsHtml)

}

const signUpSuccess = (data) => {
  $('form#sign-in').show()
  $('form#sign-up').hide()
  $('#instruments-div').text('')
  $('div.error-handling').text('')
  document.getElementById('sign-up').reset()
}

const signUpFailure = () => {
  $('div.error-handling').text('Sign up error')
}

const signInSuccess = (data) => {
  store.user = data.user
  document.getElementById('sign-in').reset()
  $('button#nav-add-instrument').show()
  $('button#nav-sign-up').hide()
  $('button#nav-sign-in').hide()
  $('form#sign-in').hide()
  $('button#sign-out').show()
  $('button#view-instruments').show()
  $('button#nav-change-password').show()
  $('div.error-handling').text('')
}

const signInFailure = (data) => {
  $('div.error-handling').text('Sign in error')
}

const signOutSuccess = (data) => {
  $('#instruments-div').text('')
  $('form#add-instrument').hide()
  $('form#edit-instrument').hide()
  $('form#change-password').hide()
  $('button#nav-sign-up').show()
  $('button#nav-sign-in').show()
  $('button#nav-add-instrument').hide()
  $('button#nav-edit-instrument').hide()
  $('button#view-instruments').hide()
  $('button#sign-out').hide()
  $('button#nav-change-password').hide()
  $('div.error-handling').text('')
}

const changePasswordSuccess = (data) => {
  $('div.error-handling').text('Password changed')
}

const changePasswordFailure = () => {
  $('div.error-handling').text('Change Password error')
}

const addInstrumentSuccess = (data) => {
  $('div.error-handling').text('Instrument Created')
  refreshInstrumentDiv()
  document.getElementById('add-instrument').reset()
}

const addInstrumentFailure = (addInstrumentSuccess) => {
  $('div.error-handling').text('Add instrument error')
}

const viewInstrumentsSuccess = (data) => {
  store.instruments = data.instruments
  const showInstrumentsHtml = showInstrumentsTemplate({ instruments: data.instruments })
  $('button#nav-edit-instrument').show()
  $('#instruments-div').text('')
  $('#instruments-div').append(showInstrumentsHtml)
  // $('#edit-instrument').on('submit', function (event) {
  //   console.log('editevents')
  //   event.preventDefault()
  //   const data = getFormFields(event.target)
  //   api.editInstrument(data)
  //     .then(editInstrumentSuccess)
  //     .catch(editInstrumentFailure)
  // })
}

const viewInstrumentsFailure = (data) => {

}

const deleteInstrumentSuccess = (data) => {
  refreshInstrumentDiv()
}

const deleteInstrumentFailure = (data) => {
  $('div.error-handling').text('Delete instrument error')
}

const editInstrumentSuccess = (data) => {
  refreshInstrumentDiv()
}

const editInstrumentFailure = (data) => {
  $('div.error-handling').text('Instrument edit error')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  addInstrumentSuccess,
  addInstrumentFailure,
  viewInstrumentsSuccess,
  viewInstrumentsFailure,
  deleteInstrumentSuccess,
  deleteInstrumentFailure,
  editInstrumentSuccess,
  editInstrumentFailure
}
