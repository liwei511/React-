const path = require('path');
module.exports = {
  entry: [
    'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
  resolve: {
      alias: {
        pages: path.join(__dirname, 'src/pages'),
        component: path.join(__dirname, 'src/component'),
        router: path.join(__dirname, 'src/router'),
        // redux: path.join(__dirname, 'src/redux')
      }
  },
  output: {
      path: path.join(__dirname, '/dist'),
      filename: "bundle.js",
      chunkFilename: '[name].js', // 打包文件名，router里定义，默认1，2..
      publicPath: '/assets/'
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }, {
          test: /\.(png|jpg|gif)$/,
          use: [{
              loader: 'url-loader',
              options: {
                  limit: 8192
              }
          }]
      }]
  },
  devServer: {
    //   '/get': {
    //       target: 'localhost:3000',
    //       secure: false
    //   },
      port: 8088,
    //   contentBase: path.join(__dirname, './dist'),
      historyApiFallback: true,
      host: '10.110.1.193'
  },
  devtool: 'inline-source-map'
};