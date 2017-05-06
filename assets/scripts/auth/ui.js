'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('ui')
}

const signUpFailure = () => {
  console.log(' ui Error')
}

const signInSuccess = (data) => {
  console.log('ui success')

  store.user = data.user
  document.getElementById('sign-in').reset()
}

const signInFailure = (data) => {
  console.log('ui failure')
}

const signOutSuccess = (data) => {
}

const changePasswordSuccess = (data) => {
  console.log('ui')
}

const changePasswordFailure = () => {
  console.log('ui')
}

const addInstrumentSuccess = (data) => {
  console.log(data)
}

const addInstrumentFailure = (addInstrumentSuccess) => {
}

const viewInstrumentsSuccess = (data) => {
  console.log(data + ' success')
}

const viewInstrumentsFailure = (data) => {
  console.log(data + 'failure')
}

const deleteInstrumentSuccess = (data) => {
  console.log(data + ' success')
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
