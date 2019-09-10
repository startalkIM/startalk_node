## 本地操作

### 1.qunarchat_web项目配置

#### 1、安装依赖(尝试低版本node)
```
    npm install fekit -g 
```

#### 2、修改配置
- 修改qunarchat_web/src目录下的 navigation.js 文件
- 将后台部署后生成的导航链接，粘贴到浏览器中访问，查看浏览器中返回的json数据
- 若浏览器查看json数据不清晰，可以打开 https://www.json.cn 将返回数据粘贴到左侧窗口，右侧会自动生成解析后的json数据
- 将json数据中的baseaddess部分直接全部粘贴到navigation.js文件中即可

#### 3、prod打包
- 执行打包操作，在prd目录下生成打包文件
- 然后拷贝到node项目的public文件夹下，用于引入
```
    fekit min
```

### 2.qunarchat_node项目配置

#### 一、查看 js、css文件导入
- 在qunarchat_web项目配置中，已经将项目所需的文件复制到了该项目public文件夹下
- 记录相应版本号，便于配置node_config.js文件

#### 二、修改配置
- 修改startalk_node项目目录下的 node_config.js 文件
- 将后台部署后生成的导航链接，粘贴到浏览器中访问，查看浏览器中返回的json数据
- 若浏览器查看json数据不清晰，可以打开 https://www.json.cn 将返回数据粘贴到左侧窗口，右侧会自动生成解析后的json数据
- node_config.js文件说明：
    - "xmpp":"",//后台建立连接接口
    - "fileurl":"",//后台接口
    - "javaurl":"",//后台接口
    - "httpurl":"",//后台接口
    - "apiurl":"",//后台接口
    - web：//静态资源路径
        - title:自定义项目标题
        - webcss:css路径--public/styles/web/qchat@version.css文件名
        - webjs: js路径--public/scripts/page/web/qchat@version.js文件名
    - touch：//静态资源路径
        - title:自定义项目标题
        - webcss:css路径--public/styles/touch/qchat@version.css文件名
        - webjs: js路径--public/scripts/page/touch/qchat@version.js文件名 
    - jquery：//jquery文件
    - navigation：//导航链接文件
- 后台接口的配置需找到导航链接返回数据中相同key字段对应的value值，填入到node_config.js文件中即可
- 下面的是静态资源文件路径，根据之前记录下来的js和css文件名，分别填入到node_config.js文件中即可

## 服务器直接部署策略

### 一、下载代码到服务器

- 登录服务器后，下载源码进行操作。
```
    git clone 
```

### 二、服务器环境安装(root用户)

- 安装node：
```
    wget https://npm.taobao.org/mirrors/node/v8.6.0/node-v8.6.0-linux-x64.tar.xz
    tar -xvf  node-v8.6.0-linux-x64.tar.xz
    cd  node-v8.6.0-linux-x64/bin
```
- 执行以下命令，若显示 v8.6.0 ，则表明安装成功
```
    ./node -v
```
- 配置软连接，便于全局使用 node npm命令
```
    ln -s /qchat/node-v8.6.0-linux-x64/bin/node /usr/local/bin/node
    ln -s /qchat/node-v8.6.0-linux-x64/bin/npm /usr/local/bin/npm
```
- 分别执行以下命令，若返回版本号，则表示配置成功
```
    node -v
    npm -v
```

### 三、qchat_node项目配置、启动服务

#### 一、安装依赖
```
    cd /qchat
    npm install
```

#### 二、修改配置
- 修改项目目录下的 node_config.js 文件，执行以下命令进入编辑状态
```
    vim node_config.js
```
- 将后台部署后生成的导航链接，粘贴到浏览器中访问，查看浏览器中返回的json数据
- 若浏览器查看json数据不清晰，可以打开 https://www.json.cn 将返回数据粘贴到左侧窗口，右侧会自动生成解析后的json数据
- node_config.js文件说明：
    - "xmpp":"",//后台建立连接接口
    - "fileurl":"",//后台接口
    - "javaurl":"",//后台接口
    - "httpurl":"",//后台接口
    - "apiurl":"",//后台接口
    - web：//静态资源路径
        - title:自定义项目标题
        - webcss:css路径--public/styles/web/qchat@version.css文件名
        - webjs: js路径--public/scripts/page/web/qchat@version.js文件名
    - touch：//静态资源路径
        - title:自定义项目标题
        - webcss:css路径--public/styles/touch/qchat@version.css文件名
        - webjs: js路径--public/scripts/page/touch/qchat@version.js文件名 
    - jquery：//jquery文件
    - navigation：//导航链接文件
- 后台接口的配置需找到导航链接返回数据中相同key字段对应的value值，填入到node_config.js文件中即可
- 下面的是静态资源文件路径
- 编辑完成后，请仔细检查配置文件格式，在末行模式下，输入以下命令,保存退出vim编辑
```
    esc键
    :wq
    回车
```
#### 三、项目启动与预览

- 使用npm启动node项目
```
    npm run start
```

- 注意：目前端口配置为8997,url中strid参数即为对应的聊天对象
- 项目预览：
    - 项目启动成功后，在电脑浏览器中输入 [本机IP:8997/webchat/web/?strid=admin&shopId=shop_1],回车键访问web页面
    - 项目启动成功后，在电脑浏览器中输入 [本机IP:8997/webchat/touch/?strid=admin&shopId=shop_1],回车键访问touch页面


