const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 构建模式
  mode: 'development',
  // 构建目标 导致编译后无法刷新等稳定版本: https://github.com/webpack/webpack-dev-server/issues/2758
  target: ['web', 'es5'],
  // 配置出口入口
  entry: {
    // 增加polyfill兼容promise等语法到低版本浏览器ie9及以上
    babel: '@babel/polyfill',
    app: './src/index.js',
  },
  // 配置入口
  output: {
    publicPath: '/',
    path: path.join(__dirname, './dist/'),
    filename: '[name].bundle.js',
  },
  devServer: {
    compress: true,
    hot: true,
    open: true,
    host: '0.0.0.0',
    port: 9000,
    public: 'http://localhost:9000',
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(jpg|png|gif|svg)$/,
        use: ['file-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          fix: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
}
