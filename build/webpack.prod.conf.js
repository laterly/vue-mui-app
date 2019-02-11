'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = config.build.env

var glob = require('glob');
var htmls = glob.sync('./src/pages/**/*.html').map(function (item) {
  var newItem = item.slice(12);
  var i = newItem.indexOf("/");
  var genName = newItem.substring(i);
  // new CleanWebpackPlugin(["dist"]);
  return new HtmlWebpackPlugin({
    filename: "." + genName,
    template: item,
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    chunks: ["manifest", "vendor", "common", "libs", item.slice(6, -5)],
    chunksSortMode: "manual"
  });
});
const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? "#source-map" : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath("js/[name].[chunkhash].js"),
    chunkFilename: utils.assetsPath("js/[id].[chunkhash].js")
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../") //根目录
      //其他配置按需求添加
    }),
    new webpack.DefinePlugin({
      "process.env": env
    }),
    // UglifyJs do not support ES6+, you can also use babel-minify for better treeshaking: https://github.com/babel/minify
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath("css/[name].[contenthash].css")
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist boys.html with correct asset hash for caching.
    // you can customize output by editing /boys.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    /*new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'boys.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),*/
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, "../node_modules")) === 0
        );
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      chunks: ["vendor"]
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../manifest.json"),
        to: config.build.assetsRoot,
        ignore: [".*"]
      }
    ]),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../static"),
        to: config.build.assetsSubDirectory,
        ignore: [".*"]
      }
    ])
  ].concat(htmls)
});



if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
