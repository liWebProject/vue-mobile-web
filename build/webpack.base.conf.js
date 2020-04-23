'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const vuxLoader = require('vux-loader')
const SpritesPlugin = require('webpack-spritesmith');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  externals: {  //通过externals排除下列文件的打包
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  plugins: [  //雪碧图
    new SpritesPlugin({
        // 目标小图标
        src: {
            cwd: path.resolve(__dirname, '../src/assets/images'),
            glob: '*.png'
        },
        // 输出雪碧图文件及样式文件
        target: {
            image: path.resolve(__dirname, '../src/assets/style/sprite.png'),
            css:[[path.resolve(__dirname, '../src/assets/style/sprite.scss'),{
                format: 'function_based_template'
            }]]
        },
        customTemplates: {
            function_based_template: path.resolve(__dirname, '../sprite_handlebars_template.handlebars')
        },
        // 样式文件中调用雪碧图地址写法
        apiOptions: {
            cssImageRef: "~@/assets/style/sprite.png?v="+Date.parse(new Date())
        },
        spritesmithOptions: {
            algorithm: 'binary-tree',
            padding: 4
        }
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/assets/style/reset.scss', './src/assets/style/mixin/mixin.scss']
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("autoprefixer")
              ]
            }
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/assets/icons')],
        options: {
          symbolId:'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/assets/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

//配置babel-loader以正确编译 VUX 的js源码
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})