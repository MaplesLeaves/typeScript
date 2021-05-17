/*
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-05-17 14:36:38
 * @LastEditors:  
 * @LastEditTime: 2021-05-17 17:44:09
 */
const {resolve}  = require('path')
module.exports = {
  entry:{
    main: resolve('./src/index.ts')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
         
          // }
        }
      }
    ]
  }
}