'use strict'
const store = require('../store.js')
const showInstrumentsTemplate = require('../templates/instruments.handlebars')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const refreshInstrumentDiv = () => {
  console.log("refreshInstrumentDiv")
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
  console.log('ui')
}

const signUpFailure = () => {
  console.log(' ui Error')
  $('#instruments-div').text('Sign up error')
}

const signInSuccess = (data) => {
  console.log('ui success')
  store.user = data.user
  document.getElementById('sign-in').reset()
  $('button#nav-add-instrument').show()
  $('button#nav-sign-up').hide()
  $('button#nav-sign-in').hide()
  $('form#sign-in').hide()
  $('button#sign-out').show()
  $('button#view-instruments').show()
}

const signInFailure = (data) => {
  console.log('ui failure')
}

const signOutSuccess = (data) => {
  $('#instruments-div').text('')
  $('form#add-instrument').hide()
  $('form#edit-instrument').hide()
  $('button#nav-sign-up').show()
  $('button#nav-sign-in').show()
  $('button#nav-add-instrument').hide()
  $('button#nav-edit-instrument').hide()
  $('button#view-instruments').hide()
  $('button#sign-out').hide()
}

const changePasswordSuccess = (data) => {
  console.log('ui')
}

const changePasswordFailure = () => {
  console.log('ui')
}

const addInstrumentSuccess = (data) => {
  refreshInstrumentDiv()
  console.log(data)
}

const addInstrumentFailure = (addInstrumentSuccess) => {
}

const viewInstrumentsSuccess = (data) => {
  console.log(data + ' success')
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
  console.log(data + 'failure')
}

const deleteInstrumentSuccess = (data) => {
  console.log("delete" + ' success')
  refreshInstrumentDiv()
}

const deleteInstrumentFailure = (data) => {
  console.log(data + ' failure')
}

const editInstrumentSuccess = (data) => {
  refreshInstrumentDiv()
  console.log(data + ' success')
}

const editInstrumentFailure = (data) => {
  console.log(data + ' failure')
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
