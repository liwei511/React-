const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    resolve: {
        alias: {
          pages: path.join(__dirname, 'src/pages'),
          component: path.join(__dirname, 'src/component'),
          router: path.join(__dirname, 'src/router')
        //   redux: path.join(__dirname, 'src/redux')
        }
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
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
}