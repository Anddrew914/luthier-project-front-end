'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('ui')
}

const signUpFailure = () => {
  console.log(' ui Error')
}

const signInSuccess = (data) => {
  console.log('ui')

  store.user = data.user
  document.getElementById('sign-in').reset()
}

const signInFailure = (data) => {
  console.log('ui')
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

const viewInstrumentSuccess = (data) => {
  console.log(data + "success")
}

const viewInstrumentFailure = (data) => {
  console.log(data + "failure")
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
  viewInstrumentSuccess,
  viewInstrumentFailure
}
