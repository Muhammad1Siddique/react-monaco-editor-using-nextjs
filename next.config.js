/**
 * @type {import('next').NextConfig}
 */

const withYAML = require('next-yaml')
module.exports = withYAML()

const withYaml = (nextConfig = {}) => {
 const newNextConfig = Object.assign({}, nextConfig, {
   webpack(config, options) {
     // insert js-yaml-loader
     config.module.rules.push({
       test: /\.ya?ml$/,
       use: 'js-yaml-loader',
     });

     // allow chaining plugins
     if (typeof nextConfig.webpack === 'function') {
       return nextConfig.webpack(config, options);
     }
     return config;
   },
 });

 return newNextConfig;
};


const withCSS = require('@zeit/next-css');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = withCSS({
 webpack(config, options) {
   config.plugins.push(new MonacoWebpackPlugin());
   return config;
 },
 cssLoaderOptions: { url: false }
})


module.exports = withYaml;

module.exports = {
 reactStrictMode: true,
 webpack:(config)=>{
   config.resolve.fallback = { fs: false };
   return config;
 }
};