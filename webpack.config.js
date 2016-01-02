const path = require('path');

module.exports = {
  entry: {
    bundle: './src/js/application.jsx'
  },
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'application.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};
