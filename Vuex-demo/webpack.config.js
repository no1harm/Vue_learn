// const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: './main.js',
    output: {
      path: __dirname,
      filename: 'build.js'
    },
    module: {
      loaders: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options:{
            presets:['es2015'],
            plugins:['transform-runtime'],
          }
        }
      ]
    },
    // babel: {
    //   presets: ['es2015'],
    //   plugins: ['transform-runtime']
    // }
    // plugins: [
    //   new VueLoaderPlugin()
    // ]
    // plugins: [ new HtmlWebpackPlugin({ filename: 'index.html', template: './index.html', title: 'hello App' }) ],
    resolve: { 
      alias: { 
        'vue$': 'vue/dist/vue.common.js' 
      },
      extensions: ['*', '.js', '.vue', '.json'] 
    },
  }