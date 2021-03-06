const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const lessModuleRegex = /\.module\.less$/;
process.env.PUBLIC_URL = path.resolve(__dirname, '../public');
module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name][contenthash:10].js'
  },
  stats: 'minimal',
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    mainFields: ['jsnext:main', 'module', 'browser', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.css'],
    alias: {
      Images: path.resolve(__dirname, '../src/images'),
      Utils: path.resolve(__dirname, '../src/utils')
    }
  },
  externals: {
    electron: require('electron')
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            sourceMaps: true,
            inputSourceMap: true,
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic'
                }
              ],
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 2
                  }
                }
              ],
              ['@babel/preset-typescript']
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserslist: [
                      '> 1%',
                      'last 7 versions',
                      'not ie <= 8',
                      'ios >= 8',
                      'android >= 4.0'
                    ]
                  })
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.less$/i,
        exclude: lessModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      // less module
      {
        test: lessModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg|ico)$/,
        use: ['url-loader'],
        generator: {
          filename: 'static/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
      cache: true
    }),
    new MiniCssExtractPlugin({
      filename: `assets/css/[name].[contenthash:8].css`,
      chunkFilename: `assets/css/[name].[contenthash:8].chunk.css`, // chunk css file
      ignoreOrder: true
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
};
