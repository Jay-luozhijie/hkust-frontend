const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        fs: false, // Ignore fs module
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser')
      };

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer']
        })
      );

      webpackConfig.externals = [nodeExternals()];

      return webpackConfig;
    }
  }
};