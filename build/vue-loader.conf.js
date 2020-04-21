'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },

 // Module build failed: Error: Failed to find '../../styles/vux-modal.css'  解决方案：将postcss-px2rem 换成 postcss-plugin-px2rem
 //postcss:[require('postcss-plugin-px2rem')({'remUnit':75,'baseDpr':2})]  //换算的基数
 // postcss:[require('postcss-px2rem')({'remUnit':75,'baseDpr':2})]  //换算的基数
}
