'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  M_ROOT:'"https://dm.mepai.me"',
  API_ROOT:'"https://dapi.mepai.me"',
  PIC_ROOT:'"https://dimages.mepai.me"',
  WEB_ROOT:'"https://dwww.mepai.me"',
})
