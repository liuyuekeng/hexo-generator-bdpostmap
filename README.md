# hexo-generator-bdpostmap

参考[hexo-generator-postmap](https://github.com/jamiei/hexo-generator-postmap)插件做了一个百度地图的版本
生成 location.json 文件和一个带文章链接的百度地图页面

在文章或者页面的 meta 信息中添加经纬度，如：

```yaml
location: [50.092953, 14.445974]
```


## Install

``` bash
$ npm install hexo-generator-bdpostmap --save
```

- Hexo 3: 0.1.x

## Options

You can configure this plugin in `_config.yml`.

``` yaml
bdpostmap:
  jsonPath: 'locations.json'
  mapPageStub: 'mapofposts'
  mapPageTitle: 'Map of posts'
  baiduMapAK: 'API_KEY'
```

- **jsonPath** - location.json 的路径.
- **mapPageStub** - 地图页面的名字
- **mapPageTitle** - 地图页面的 title.
- **baiduMapAK** - 百度地图的AK [免费申请一下](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey).