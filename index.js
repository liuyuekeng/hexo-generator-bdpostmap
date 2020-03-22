var merge = require('utils-merge');
var path = require('path');

var config = hexo.config.bdpostmap = merge({
    jsonPath: 'locations.json',
    mapPageStub: 'postmap',
    mapPageTitle: 'Map of posts',
    baiduMapAK: '',
}, hexo.config.bdpostmap);

if (!path.extname(config.jsonPath)) {
    config.jsonPath += '.json';
}

hexo.extend.generator.register('baidumap', require('./lib/generator'));