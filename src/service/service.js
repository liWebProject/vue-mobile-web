
import request from './request'

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        request.get(url, {
            params: data  //get请求 data需要通过params键传值
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        request.post(url, data)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err)
            })
    })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        request.patch(url, data)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err)
            })
    })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        request.put(url, data)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err)
            })
    })
}


/**
* 封装delete请求
* @param url
* @param data
* @returns {Promise}
*/

export function deletes(url, data = {}) {
    return new Promise((resolve, reject) => {
        request.delete(url, data)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err)
            })
    })
}