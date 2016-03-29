# 构建一个 bootstrap 的后台界面
主要按照AdminLTE写一遍，并打算参考妹纸UI。练习采用less方式bootstrap后台模板的写法。
该项目采用的是构建方式gulp，并使用了bower来管理第三方依赖包。前端模板采用了腾讯的TmodJS。

> 由于该项目是去年写一个模板项目，关于package的某些包并没有升级。可能安装后可能不能使用

# 项目目录

```
.
├── build   # 项目最后构建生成生成
├── gulp    # 这是一个 gulp 命令 目录
│   ├── public  # 这是为了方便开发 响应式
│   ├── tasks   #
│   └── util    # 工具栏
└── src  # 项目源码
    ├── bower_components    # 依赖的第三方库
    ├── fonts               # 字体
    ├── images              # 图片
    ├── js                  # js
    ├── less                # less
    ├── pages               # 静态页面 （404.html，500.html）
    ├── tpl                 # 模板文件
    └── index.html          # 首页


```

# 安装

```
npm install

bower install
```

# 开发

```
gulp dev
```

# 资源

[AdminLTE](https://github.com/almasaeed2010/AdminLTE)
