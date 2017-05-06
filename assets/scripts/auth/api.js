'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  console.log('api', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  console.log('api', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = (data) => {
  console.log('api', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const changePassword = (data) => {
  console.log('api', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const addInstrument = (data) => {
  console.log('api', data)
  return $.ajax({
    url: config.apiOrigin + '/instruments/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const viewInstruments = (data) => {
  console.log('api', data)
  return $.ajax({
    url: config.apiOrigin + '/instruments/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  changePassword,
  signOut,
  signIn,
  addInstrument,
  viewInstruments
}
