

const req = require.context('../../static/images', false, /\.png|\.jpg|\.jpeg$/)
const requireAll = requireContext => requireContext.keys()

import { transformObject } from './index.js'

const assetsImgPath = '../static/images/';  // 静态图路径 or 线上cdn路径

const reg_name = /\.\/(.*)\./
const reg = /\.\/(.*)/
const originArr = requireAll(req);

const imgsNameArr = originArr.map(i => {
	return i.match(reg_name)[1];
})

const imgsPathArr = originArr.map(i => {
	return assetsImgPath + i.match(reg)[1];
})

const imgsObj = transformObject(imgsNameArr,imgsPathArr)

export default imgsObj;