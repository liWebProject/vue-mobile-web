
import { get, post, patch, put, deletes } from './service.js';

export const API = {
    baseUrl: process.env.API_ROOT,

    //api demo
    getJsSdkConfig: '/passport/wx/getJsSdkConfig.do', //微信配置
    userInfo: '/v5/user/info',
    oLogin: '/v1/web/oauthlogin',
    cityData: '/v5/city',
}


/*******用户*******/

//获取用户详情
export const apiUserInfo = (data) => get(API.userInfo, data);

//个人信息修改城市
export const apiCityData = (data) => get(API.cityData, data);

//登录
export const apiOLogin = (data) => post(API.oLogin, data);
