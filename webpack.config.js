// webpack.config.js

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
module.exports = {
  plugins: [
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/microsoft/monaco-editor/blob/main/webpack-plugin/README.md#options
      languages: ['yaml']
    })
  ]
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.(yml|ya?ml)$/,
        oneOf: [
          {
            resourceQuery: /stream/,
            options: { asStream: true },
            loader: 'yaml-loader'
          },
          { loader: 'yaml-loader' }
        ],
        use: [
          {
            loader: 'yaml-loader',
          },
        ],
      }
    ]
  }
}