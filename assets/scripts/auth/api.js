'use strict'

const config = require('../config.js')
const store = require('../store.js')
const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = (data) => {
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
  return $.ajax({
    url: config.apiOrigin + '/instruments/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteInstrument = (instrumentPostId) => {
  return $.ajax({
    url: config.apiOrigin + '/instruments/' + instrumentPostId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editInstrument = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/instruments/' + data.instrumentId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  changePassword,
  signOut,
  signIn,
  addInstrument,
  viewInstruments,
  deleteInstrument,
  editInstrument
}
