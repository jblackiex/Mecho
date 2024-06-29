const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin per generare file HTML con Webpack che includono automaticamente i file JS e CSS generati

module.exports = {
  entry: './js/index.js
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Percorso al tuo template HTML
      filename: 'index.html' // Nome del file HTML generato
    })
  ],
  output: {
    filename: '[name].bundle.js', // Nome del file JS generato (con hash)
    path: __dirname + '/dist', // Percorso della cartella di output
    chunkFilename: '[name].bundle.js', // Nome dei file JS generati per i chunk (con hash)
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // Carica e applica file CSS
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpila JS moderno in JS compatibile con browser più vecchi
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
