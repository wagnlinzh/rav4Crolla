# webpack 

<br />
<br />

## Log July 21 bitch..branch. webpack-test-6


先做一件之前一直忘了做的是事情 : 标准目录树

```
├─dist
│  ├─css
│  ├─img
│  └─js
└─src
    ├─css
    ├─img
    └─js
```

好处是可以通过制定inlcude 的范围,避免误伤其他的东西,其实不是误伤,准确的说,是**浪费资源**, 特么会导致打包的bunlde.js 很大.


在这个上面发挥想象,故事会进行的顺畅些.

 需要修改的东西其实并不多.  主要是几个路劲地址.



## #坑
```
include:'./src',
```

把所有的都这么用的话, css的样式 貌似引不进来. 这个故事告诉我们....T_T

<br />
<br />

## log July 20 branch webpack-test-4

对于webpack.dist.config.js的原则是, 不需要的插件,尽可能的去掉.

```
bundle.js 从1.7MB -> 612KB
```

这是进步啊~T_T

```
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
```

bundle.js

612KB -> 362KB

所谓的压缩,是针对dist 版本的 ,需要区别dev版本

压缩原则:

- 去除不必要的插件 `HotModuleReplacementPlugin`
- 提取第三方库
- 代码压缩
- 代码分割

  
<br />
<br />


```
bundle.js 362KB-> 239KB
```

<br />
<br />

## branch webpack-test-4

<br />
<br />

单入口, 将多个入口合在了一个入口中.




<br />
<br />

## log July 19

**webpack的优化**

```

 刚研究i.mi.com的页面, 发现别人家的webpack的大小是0-20K.我的目前是1.7MB

 -______________________-
```


 


<br />
<br />

## 关于经销商之间的传参

done 

<br />
<br />

详见代码:


```JavaScript

var JSonData=require('./common/dealer.js');

var baseMarket=require('./common/base_market.js');

baseMarket(JSonData);


//需要注意的是,baseMarket 需要来自dealer的数据. 
```



<br />
<br />
## branch webpack-test-3

额.webpack-test-2 卒

现阶段的问题 . -> bundle.js 1.2MB

(T_T)


<br /><br />
## Log July 18

1. 优化bundle.js
2. 标准树结构

按照alloyTeam 的方法实现了一遍. 恩 优化了 把原来的 1.2MB -> 变成了1.35MB 

@_@


```
使用了插件`webpack.optimize.UglifyJsPlugin` 效果显著 压缩到了 1.35M-> 1.32M.
特么还报错@_@

-______________________-

```


关于bundle 的大小. 402K

> 刚才我把dist 清理了之后,重新build,然后我发现 变小了......402K
而且没压缩.
>
> 难道是叠加的? 
>
> -_____________________-

<br />

> done 其实是错觉. 刚发现是我误把js文件夹删了. 重新恢复过来之后吧....还是回到了完美的1.35MB
>
> -_____________________-









```
T_T
1.44MB

之前还是说好的1.35MB呢?
```


<br />
<br />
<br />
<br />



### #坑

```

UglifyJsPlugin 对 html 标签的`<`, `>`  敏感,

这么写  <a class="next" href="javascript:void(0)"><</a> 会报错.



```


<br />

**最好 用特殊符号的 专用表示法来表示**

**最好 用特殊符号的 专用表示法来表示**

**最好 用特殊符号的 专用表示法来表示**




<br /><br /><br />

常用的特殊符号:

```
&nbsp;  空格

&amp;   &

&lt;    <

&gt;    >

&quot;  "

&qpos;  '
```



<br />
<br />
<br />
<br />
### Log snapCode

> 如果把图片的 `?limit=8192` 弄小一点, bundle 会小一点的







<br />
<br />
<br />



## Question2 为什么 UglifyJsPlugin 之后的寻址(定位) 会出问题, 为什么会找不到图片路劲呢?



```
-______________-

```








<br /><br /><br /><br />

### Question 3 图片的路劲 如果把limit的值弄得比较小一点,那么回头一些图片加载不了,但是图片的名称和位置转化都是对的.怎么回事?

```
-______________-


设置publicPath

   //出口
  output: {
    path: DIST_PATH, // 输出文件的保存路径
    // filename: 'bundle.js', // 输出文件的名称
    filename: '[name].js',
    publicPath: "http://localhost:8080/dist/"
  },


```


<br /><br />

### 又一个坑

```
在使用 `webpack-dev-server` 的时候, 关于图片的加载的问题, 没报错, 但是还是有问题, 主要是因为. publicPath ,设置为绝对路径：
  publicPath: "http://localhost:8080/dist/"


  完整的设置如下：


  //出口
  output: {
    path: DIST_PATH, // 输出文件的保存路径
    // filename: 'bundle.js', // 输出文件的名称
    filename: '[name].js',
    publicPath: "http://localhost:8080/dist/"
  },
 

```


<br />
<br />
<br />

### 关于dev 版本 和 dist 版本 最终上线 

- 调试 也就是dev的时候, 最好不用hash.最终上线版本做hash
- output 的 publicPath 最后的时候一定要改为CDN的地址.




<br />
<br />


###　突然想到一个问题，　如果用CSS Module 那么对于原来是html的页面的能不能实现呢?


















































<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
## Log July 17


关于`webpack-dev-server` 因为测试目录变了,所以对应的localhost的地址也要变呀

变到了哪儿呢?

以这个项目为例,

变到了 

```
new OpenBrowserPlugin({
      url: 'http://localhost:8080/dist/ha.html'
    })

    需要注意的另外一个地上是publicPath :
```


<br /><br /><br />

哦对了,这个插件很爽,用起来,不需要手动的去输入地址了. `open-browser-webpack-plugin`这个插件


<br /><br />
关于webpack的使用, 我们将用到它的话,最近的一次改版是在7月底,八月初的话,我们需要做的事情有哪些呢?

- webpack的优化. 针对打包过程的优化.
- 异步加载 打开页面的过程默认加载首屏的内容.然后其他的内容 异步或延迟加载.


这两项应该是巨大的工程.但是时间必须在尽快完成. 




### Q1

webpack 所谓的模块化 究竟是为了优化,还是为了工程化(也就是组件化)?

> 两者都可以做. 优化的方面是对于单页的移动WEB APP . 需要对其做得有哪些呢?可以做首屏加载,然后其他的懒加载. 对各个不同的部分用不同的加载时机.

> 另一方面关于 组件化.那么能做的有哪些? 可以切成非常非常小的一片一片的. 然后对小片进行组装.




<br /><br /><br /><br />
# webpack test1



需要做的是把当前的专题用webpack包装起来.




<br /><br />
## log

0710 主题

webpack html-loader









<br /><br />
## PART 1







- 故事的第一阶段

  保留index.html中的主要内容.

  ​

- 故事的第二阶段

  ​全面的js化.




<br /><br />


# PART 2





最后的最后, 我很想说的一句话是:



```
欢迎进入黑暗世界:)
```







by wanglinzhizhi














<br /><br />


## 这是项目的修改日志

Tips: 时间点不用记录,因为每次push,每次commit系统都有时间记录的.






<br /><br />

## 关于webpack的log

1. 我尝试把所有的script的标签全部去掉,只引入style. 测试.对css样式的压缩.
    成功了一半,样式确实是引入了. 但是显然不够.
    因为最后的图片的路径变化了,所以的我的图片有些的加载错误.
    但是主体样式确实 是出来了.  


   ```
   done:其实这里需要注意的出口的时候, 设置publicPath
   ```

   ​

   ​

2 . next to pack -> js








## 标准化 的过程

目录结果

```
├─dev
│  ├─css
│  ├─img
│  └─js
├─dist
│  ├─css
│  ├─img
│  └─js
└─src
    ├─css
    ├─img
    └─js
```



- src  : 源码目录
- dev : 开发时候产生的目录
- dist : 最终产品的目录








<br /><br />



## -

#### 该不该用模板呢? 怎么用模板?

```
可以直接把html 作为模板使用.这里面连变量都不需要要设置.
```









<br /><br />

#### next hash 化,去缓存 -> 必须hash的原因, 缓存. -> html-webpack-plugin









<br />



#### 经典问题, 第三方插件对jquery的依赖问题.怎么解决呢?

```
new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
```

部分代码正确执行了. 还有些代码没有正确执行.




<br /><br />
## logo 0715

我试着把jquery 换成了1.12.x版本, 额,基本没事儿,因为我把jquery1.12.x版本的内容放到原版中没有问题.虽然有个小报错, 但是没有关系.     


<br /><br />
## #1

// 发现新的 问题, 我知道了成千上万个报错来自于哪儿了, jquery 的版本过低, 我卸载了jquery 1.12.x之后, 安装了1.8.3 就报错了. 现在试一下装回来,然后看看报错会不会消失,如果报错消失,说明,问题在这儿

test...

// done 果然.



<br /><br />
## #2

那么新的问题是,如果我们必须用1.8.3 版本的 jquery ,因为滚动条的那个插件需要的1.8.3 之前的.解决依赖问题.

有两种思路
- 用require的方法把jquery引进来
- 将插件中的1.8.3 之后不兼容的 属性重写一下不就得了



<br /><br />
## #3
发现一个新的问题. 就是,如果我的代码注入的在head中貌似也会引起问题. 加载顺序的问题吧,我猜



<br /><br />
## #4 
整理下, 现在解决的问题

1.  jquery的 依赖问题 done
2.  html代码直接作为模板打包到dist的目录


需要继续解决的问题

- 各个模块的加载顺序 就是 `html-webpack-plugin` 的注入顺序的问题.
- 对低版本的 jquery的依赖怎么搞.另外,我想把部分的内容inject 到head 另一部分inject 到body怎么整.
- 关于调试, 怎么方便的 调试, 使得迁移成本尽可能小, 无痛, 无缝......... loading....
- 关于 怎么优化webpack的性能.....loading....

<br /><br />

## #6

关于调试
可以用映射,映射到源文件上 这样调试的时候不会不知道代码在哪儿.

使用`devtool: 'eval-source-map' ` 放在配置文件中.
需要注意的是, `css?sourceMap` 对于css ,只需要给css-laoder加


<br /><br /><br /><br /><br /><br /><br /><br /><br />
## vscode 快捷键收集

```
快捷键

alt+shift+F 代码格式化

ctrl+` 内嵌终端

主要是可以不用页面切换, 缺点是, cmd的终端太弱.... mac上好一点. 可以用zsh :)



```


Terminal 中不能输入中文.恩....(T_T)