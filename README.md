# yu-css
说明:本模块已实现rem适配，在设计时请将页面宽度分为30rem，设置元素的宽高都用rem单位。
那么如何计算出元素的rem？
比如：设计图的页面宽是750px，div1的宽度在设计图中是100px，那么div1的rem宽是：
100/(750/30) = 4rem;
样式设置：`div1{ width:4rem; }`

### 安装
```
cnpm install yu-css --save
```

**引入**
```
require('yu-css'); //或import 'yu-css';
```

**给标签添加class名，即可使用本模块的css样式，如：**
```
//border 给元素添加1px黑色的边框，并设置了box-sizing:border-box;
<div class="border">元素边框</div>
```

### 以下是各种样式的class名：
**12格布局：**
```
.row  //行,一行容得下12格col
.col-1 //1格col
.col-2 //2格col
.col-3 //3格col
.col-4 //4格col
.col-5 //5格col
.col-6 //6格col
.col-7 //7格col
.col-8 //8格col
.col-9 //9格col
.col-10 //10格col
.col-11 //11格col
.col-12 //12格col
间隔：
.gep-1  //1格col的距离
.gep-2  //2格col的距离
.gep-3  //3格col的距离
.gep-4  //4格col的距离
.gep-5  //5格col的距离
.gep-6  //6格col的距离
.gep-7  //7格col的距离
.gep-8  //8格col的距离
.gep-9  //9格col的距离
.gep-10  //10格col的距离
.gep-11  //11格col的距离
.gep-12  //12格col的距离

//用法示例：
<div class="row">
    <div class="col-2">a</div>
    <div class="col-2 gep-1">b</div>
    <div class="col-2 gep-1">c</div>
    <div class="col-1 gep-3">d</div>
</div>
```

**css3的flex布局：**
*水平布局：*
```
.flex-row  //水平布局，子元素垂直居中
```

*垂直布局：*
```
.flex-column  //垂直布局，子元素水平居中
```

*flex布局的子元素:*
```
.flex-1    //子元素的宽占比，如果有5个flex-1的子元素，则一个子元素占父元素20%的宽度
.flex-2
.flex-3
.flex-4
.flex-5
.flex-6
.flex-7
.flex-8
.flex-9
.flex-10

//用法示例：
<div class="flex-row">
    <div class="flex-1">a<div>
    <div class="flex-1">b<div>
    <div class="flex-1">c<div>
</div>
```

**文字垂直居中**
```
.table
.table-cell

//用法示例：
<div class="table" style="height:100px;">
    <div class="table-cell">我是文字，垂直居中显示</div>
</div>
```

**元素水平垂直居中**
```
.center
//用法示例：
<div style="position:relative; height:100px;">
    <div class="center">我会水平垂直居中</div>
</div>
```

**清除浮动**
```
.after

//用法示例：
<div class="after">
    <div style="float:left"></div>
</div>
```

**水平方向溢出隐藏**
```
.overflow-x
```

**圆角**
```
.border-radius  //圆角为5px
```

**阴影**
```
.box-shadow  //外阴影
.box-shadow-inset  //内阴影
```

**线性渐变**
```
.linear-0  //从下往上的渐变
.linear-45  //从左下角往右上角
.linear-90  //从左往右
.linear-135  //从左上角往右下角
.linear-180  //从上往下
```

**径向渐变**
```
.radial-0-0  //渐变中心点在左上角
.radial-0-100  //渐变中心点在左下角
.radial-100-0  //渐变中心点在右上角
.radial-100-100  //渐变中心点在右下角
.radial-50-50  //渐变中心点在最中间
```

**图标** [点击查看：图标码](https://18022682515.github.io/yu-css/public/iconPage/)
```
.icon 

//使用示例：
<i class="icon">&#xe6ad;</i>
```
