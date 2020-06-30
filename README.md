# yu-css
说明:rem适配，大于750的页面分为25rem，小于750的页面分为10rem。
要使用本模块必须，需webpack已配置less-loader。

pc端举例：如果设计图是750px，计算方式如下：
750/25 = 30px，即1rem是30px；
假设一个div的宽度是375px，应是：
375/30 = 12.5rem
例子：`div{ width:12.5rem; }`

移动端举例：如果设计图是750px，计算方式如下：
750/10 = 75px，即1rem是75px；
假设一个div的宽度是375px，应是：
375/75 = 5rem
例子：`div{ width:5rem; }`

### 安装
```
cnpm install yu-css --save
```

**入口文件引入**
```
require('yu-css'); //或import 'yu-css';
```