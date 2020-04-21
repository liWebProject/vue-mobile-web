
import getters from './getters'
import persistedState from 'vuex-persistedstate'  //vuex数据持久化保存

const Vue = require('vue')
const Vuex = require('vuex')
const Cookie = require('js-cookie')

Vue.use(Vuex)

// 将 /modules文件夹下的文件export的对象, 合并到modules数组对象中
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})


const store = new Vuex.Store({
  modules,
  getters,
  plugins: [  // 数据默认保存在localstorage中
    persistedState({
      storage: {
        getItem: key => Cookie.get(key),
        setItem: (key, value) => Cookie.set(key, value, { expires: 7 }),
        removeItem: key => Cookie.remove(key)
      }
    })
  ]
})

export default store
