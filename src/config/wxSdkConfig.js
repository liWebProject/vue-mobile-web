
import wx from 'weixin-js-sdk'
import Bus from '../common/bus.js'
import terminalType from '../utils/terminal-type.js'
import { API } from '../service/api.js'

//import store from '../store/index.js'

const axios = require('axios')

/**
 * [wxShare description]
 * @param  {[type]} userConfig   [自定义配置]
 * @param  {[type]} shareSuccess [分享成功的回调]
 * @return {[type]}              [description]
 */
export function wxShare(userConfig, callback) {

  // 判断终端类型是否为微信
  if (terminalType.Weixin()) {

    let defaultConfig = {
      'title': '约苗-成人预防接种信息服务平台',
      'desc': '预防科普早知道，疫苗接种上约苗！轻松预约，便捷查询，就近接种',
      'link': '', // 默认分享链接
      'imgUrl': '', // 默认分享图标的url
      'type': 'link',
      'success': function() {

        // 执行成功函数的回调
        if (callback && typeof callback == 'function') {
          callback();
        }
      },
      'cancel': function() {}
    }

    // 配置合并
    let wxConfig = Object.assign({}, defaultConfig, userConfig);

    Bus.$on('wxReady', function(e) {
      wx.onMenuShareTimeline(wxConfig)
      wx.onMenuShareAppMessage(wxConfig)
      wx.onMenuShareQQ(wxConfig)
      wx.onMenuShareWeibo(wxConfig)
      wx.onMenuShareQZone(wxConfig)
    })

    wx.onMenuShareTimeline(wxConfig)
    wx.onMenuShareAppMessage(wxConfig)
    wx.onMenuShareQQ(wxConfig)
    wx.onMenuShareWeibo(wxConfig)
    wx.onMenuShareQZone(wxConfig)
  }
}

/**
 * [callWeixinApi description: 微信sdk基础配置]
 * @param  {[type]} openId [根据openId 换取签名配置数据 ]
 * @return {[type]}        [description]
 */
export function callWeixinApi(openId) {

  //let url = location.href.split('#')[0];
  let url = location.href.host;

  axios.get(API.getJsSdkConfig, {
    params: {
      openId: openId,
      url: url
    }
  }).then((res) => {

    wx.config({
      debug: false,
      appId: res.data.data.appId,
      timestamp: res.data.data.timestamp,
      nonceStr: res.data.data.nonceStr,
      signature: res.data.data.signature,
      jsApiList: [
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'chooseWXPay',
        'openLocation',
        'getLocation',
        'scanQRCode'
      ]
    })

    wx.ready(function() {
      wx.hideAllNonBaseMenuItem();
      wx.showMenuItems({
        menuList: [
          'menuItem:share:appMessage', // 分享给朋友
          'menuItem:share:timeline', // 分享到朋友圈
          'menuItem:share:weiboApp',
          'menuItem:share:qq',
          'menuItem:share:QZone '
        ]
      })

      // 广播wxReady
      Bus.$emit('wxReady', true);
      //store.state.isWxConfigReady = true;

      //wxShare()
      // wx.onMenuShareTimeline(shareInfo);
      // wx.onMenuShareAppMessage(shareInfo);
      // wx.onMenuShareQQ(shareInfo);
      // wx.onMenuShareWeibo(shareInfo);
      // wx.onMenuShareQZone(shareInfo);
    });

    wx.error(function(res) {
      console.log("wx.error：" + res.errMsg);
    })
  }).catch((e) => {
    console.log(e);
  })
}