'use strict'
const store = require('../store.js')
const showInstrumentsTemplate = require('../templates/instruments.handlebars')
const api = require('./api.js')

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
  console.log('ui')
}

const signUpFailure = () => {
  console.log(' ui Error')
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
  $('button#nav-sign-up').show()
  $('button#nav-sign-in').show()
  $('button#nav-add-instrument').hide()
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
  $('#instruments-div').text('')
  $('#instruments-div').append(showInstrumentsHtml)
  $('#delete-instrument').on('click', function () {
    api.deleteInstrument(this.dataset.id)
    .then(deleteInstrumentSuccess)
    .catch(deleteInstrumentFailure)
  })
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
