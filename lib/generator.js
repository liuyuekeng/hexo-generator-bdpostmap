var path = require('path');
var ejs = require('ejs');
var fs = require('fs');

var mapEmbedSrc = path.join(__dirname, '../mapembed.ejs');
var mapEmbedTmpl = ejs.compile(fs.readFileSync(mapEmbedSrc, 'utf8'));

module.exports = function(locals) {
    var config = this.config;
    var postsInfo = [].concat(locals.posts.toArray(), locals.pages.toArray())
    .filter(function (post) {
        return post.location != null;
    }).map(function (post) {
        return {
            url: encodeURI(config.url + config.root + post.path),
            lastmod: (post.updated || post.date).format('YYYY/MM/DD'),
            lat: post.location[0],
            lng: post.location[1],
            title: post.title
        }
    });

    return [{
        path: config.bdpostmap.jsonPath,
        data: JSON.stringify(postsInfo)
    }, {
        path: config.bdpostmap.mapPageStub + '/index.html',
        data: {
            title: config.bdpostmap.mapPageTitle,
            content: mapEmbedTmpl({
                url: encodeURI(config.root + config.bdpostmap.jsonPath),
                baiduMapAK: config.bdpostmap.baiduMapAK
            }),
            description: 'A map of geo-tagged posts on ' + config.title
        },
        layout: ['page']
    }];
}