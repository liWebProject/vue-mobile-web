// https://github.com/michael-ciniawsky/postcss-load-config
// 不希望px被转成rem的, 只要在后面写上注释 /* no */ 或者写成Px | PX就可以了

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px2rem-exclude": {
      remUnit: 75,
      baseDpr: 2,
      exclude: /node_modules|folder_name/i // 忽略node_modules目录下的文件
    }
  }
}
