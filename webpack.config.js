const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { buildDir } = require('./aha-config')

module.exports = {
  mode: 'production', // 开发模式
  devServer: {
    port: 3000,
    open: true,
    watchFiles: ['src/index.html'],
  },
  entry: './src/js/index.js', // 入口起点
  output: {
    filename: 'js/[hash:8].js',
    path: resolve(__dirname, `dist/${ buildDir }`),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: 'imgs/[hash:8].[ext]',
          esModule: false,
        },
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: 'static/[hash:8].[ext]',
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: '明信片制作',
      cdn: {
        css: [],
        js: [],
        deferJs: []
      }
    }),
    new miniCssExtractPlugin({
      filename: 'css/[hash:8].css' // 输出文件名
    }),
    new CleanWebpackPlugin() // 清除上次打包的文件
  ],
  performance: {
    hints: false // 取消性能提醒
  },
}
