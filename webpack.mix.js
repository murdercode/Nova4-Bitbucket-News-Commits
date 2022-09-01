let mix = require('laravel-mix')

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/card.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/card.css', 'css')
  .nova('murdercode/nova4-bitbucket-news-commits')
