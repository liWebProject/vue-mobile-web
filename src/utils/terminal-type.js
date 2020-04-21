/**
 * 判断终端类型
 */

const UA = navigator.userAgent.toLowerCase(); // 浏览器用户代理(转小写)

module.exports = {
  XDM: function() {
    return UA.match(/xdm/i) ? true : false;
  },
  Android: function() {
    return UA.match(/android/i) ? true : false;
  },
  BlackBerry: function() {
    return UA.match(/blackberry/i) ? true : false;
  },
  IOS: function() {
    return UA.match(/iphone|ipad|ipod/i) ? true : false;
  },
  Windows: function() {
    return UA.match(/iemobile/i) ? true : false;
  },
  Weixin: function() {
    return UA.match(/micromessenger/i) ? true : false;
  },
  QQ: function() {
    if (UA.match(/mqqbrowser/i)) return false;
    return UA.match(/qq/i) ? true : false;
  },
}