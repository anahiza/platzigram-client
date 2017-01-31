'use strict'
const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    this.options = options || {
      endpoint: {
        pictures: 'http://api.platzigram.com/picture',
        users: 'http://api.platzigram.com/user',
        auth: 'http://api.platzigram.com/auth'
      }
    }
  }
  getPicture (id, callback) {
    let opts = {
      method: 'GET',
      url: `${this.options.endpoint.pictures}/${id}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  savePicture (picture, token, callback) {
    let opts = {
      method: 'POST',
      url: `${this.options.endpoint.pictures}/`,
      body: picture,
      json: true,
      headers: {
        'Autorization': `Bearer ${token}`
      }
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  likePicture (id, callback) {
    let opts = {
      method: 'POST',
      url: `${this.options.endpoint.pictures}/${id}/like`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  listPictures (callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoint.pictures}/list`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  listPicturesByTag (tag, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoint.pictures}/tag/${tag}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  saveUser (user, callback) {
    let opts = {
      method: 'POST',
      uri: `${this.options.endpoint.users}/`,
      body: user,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  getUser (username, callback) {
    let opts = {
      method: 'GET',
      url: `${this.options.endpoint.users}/${username}`,
      json: true
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }

  auth (username, password, callback) {
    let opts = {
      method: 'POST',
      url: `${this.options.endpoint.auth}/`,
      json: true,
      body: {
        username,
        password
      }
    }
    return Promise.resolve(request(opts)).asCallback(callback)
  }
}
module.exports = Client
