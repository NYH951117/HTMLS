@REM 启动docsify本地服务
::成功
::双击运行即可

@REM 1.切换盘符
@REM E:

@REM 2.切换工作路径
@REM cd ……

@REM 3.启动服务
@REM 3.1.可以指定文件夹路径，如下
@REM docsify serve ./docs

@REM 3.2也可以不指定，默认是当前文件夹路径，如下
@REM docsify serve
@REM 也是根据此命令创建BAT文件，启动前双击此文件即可

@REM 打开网页
start http://localhost:3000

@REM 正常此命令应在前面，但是此句之后CMD暂停，因此放在最后
docsify serve