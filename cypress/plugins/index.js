const wp = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [{
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }]
      }
    },
  }
  on('file:preprocessor', wp(options))
}
