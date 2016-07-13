# webpack test1



需要做的是把当前的专题用webpack包装起来.

## log

0710 主题

webpack html-loader










## PART 1







- 故事的第一阶段

  保留index.html中的主要内容.

  ​

- 故事的第二阶段

  ​全面的js化.







# PART 2





最后的最后, 我很想说的一句话是:



```
欢迎进入黑暗世界:)
```







by wanglinzhizhi














<br /><br /><br /><br /><br />

<br />

## 这是项目的修改日志

Tips: 时间点不用记录,因为每次push,每次commit系统都有时间记录的.






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

1. next to pack -> js









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










### 该不该用模板呢? 怎么用模板?

<br /><br /><br /><br /><br />

### next hash 化,去缓存 -> 必须hash的原因, 缓存. -> html-webpack-plugin









<br /><br /><br /><br /><br /><br /><br />



### 经典问题, 第三方插件对jquery的依赖问题.怎么解决呢?