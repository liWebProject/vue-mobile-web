

const req = require.context('../assets/images/', false, /\.png|\.jpg|\.jpeg$/)
const requireAll = requireContext => requireContext.keys()

const reg_name = /\.\/(.*)\./
const reg = /\.\/(.*)/
const originArr = requireAll(req);

const imgsNameArr = originArr.map(i => {
	return i.match(reg_name)[1];
})

const imgsPathArr = originArr.map(i => {
	return i.match(reg)[1];
})

/**
 * [transformObject 2个长度相等的一维数组转为键值对对象]
 * @param  {[type]} keyArr   [description]
 * @param  {[type]} valueArr [description]
 * @return {[type]}          [description]
 */
function transformObject(keyArr,valueArr) {
    var obj = {};

    keyArr.map( (v,i) => {
        obj[keyArr[i]] = require('../assets/images/'+valueArr[i]);
    })

    return obj;
}

/**
 * [imgsObj 调用方法生成图片对象]
 * @type {[type]}
 */
const imgsObj =  transformObject(imgsNameArr,imgsPathArr);
console.log(imgsObj);
export default imgsObj;