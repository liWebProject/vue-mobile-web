
import imgsObj from '@/utils/imgs-map.js'


/**
 * [exports description: 全局静态常量配置]
 * @type {Object}
 */
export default {
  /**
   * [title description: 默认的page-title值]
   * @type {String}
   */
  title: 'Vue mobile project',

  /**
   * [Code description: API接口请求返回码]
   * @type {Object}
   */
  httpCode: {
    success: '100001',
    noLogin: '50008'
  },

    /**
   * [Code description: 静态图片集合]
   * @type {Object}
   */
  staticImgs: imgsObj,

  /**
   * [statistics description: 提取页面公用常量]
   * @type {Object}
   */
  statistics: {

    home: {
      'page': ['预约主流程', '首页', '页面浏览量']
    },

    //积分中心
    integral: {
      page: {
        posters: ['积分中心', '赚取积分页', '页面浏览量'],
        shop: ['积分中心', '积分商城页', '页面浏览量'],
        invitation: ['积分中心', '邀请助力页', '页面浏览量']
      }
    }

  }
}