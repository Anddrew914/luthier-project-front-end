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

const changePasswordSuccess = (data) => {
  console.log('ui')
  document.getElementById('change-password').reset()
}

const changePasswordFailure = () => {
  console.log('ui')
}

const signOutSuccess = (data) => {
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
