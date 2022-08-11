<table><tr><td bgcolor=>
<center>
<font face=黑体 size=10 color=#b71c1c>
<br/>
🎒Markdown帮助文档
<br/>&nbsp
</font>
</center>
</td></tr></table>

![1](https://alp.alicdn.com/1599161206226-2100-220.png)

> **本文作用:**汇总Markdown常用语法和技巧,并制作为帮助文档
>
> **本文作者:**NYH(东林在读硕士)
>
> **发布时间:**2020年9月3日
>
> **其他平台:** [微信公众号]() |[今日头条]() | [简书]() | [B站]() | [CSND]() | [知乎]() |
>
> **配套视频:**[五分钟精通Markdown帮助文档精简版]()
>

# <span id="Home">🎒Markdown帮助文档</span>

---

[toc]

---

# [🚀](#Home)序言

较为流行的标记语言

# [🚀](#Home)编辑器

**编辑器**:Typora\下载网址\使用教程\

[Typora使用教程](Typora使用教程.md)：见其教程，上传到云端、同步

# [🚀](#Home)标题

```markdown


这也是一级标题
===

这也是二级标题
---
```

# <span id="样式">[🚀](#Home)样式  </span>

---

> **索引：**[修改样式](#修改样式)
>

斜体

```markdown
*斜体*
_斜体_
**粗体**
__粗体__
***粗斜体文本***
___粗斜体文本___
==高亮==
<u>下划线</u>
~~删除线~~:两头添加波浪线
> 引用
5^2^上标
H~2~O下标

```

> <u>下划线</u>:`<u>下划线</u>`
>
> ~~删除线~~:`~~删除线~~`
>
> ==高亮==:`==高亮==`
>
> 5^2^上标
>
> H~2~O下标
>
> 脚注[^脚注]
>
> [^脚注]: 两个必须同时存在
>
>

## <span id="修改样式">[🗼](#样式)修改样式</span>

[修改样式](https://blog.csdn.net/heimu24/article/details/81189700?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param)

<font face=隶书 size=9 color=#b71c1c>这里是需要突出显示的内容</font>

---

<table><tr><td bgcolor=#d3cbaf><font face=隶书 size=10 color=#b71c1c><center>
<br/>我的大标题<br/>&nbsp</center></font></td></tr></table>
***</table>

<table><tr><td bgcolor=>
<center>
<font face=隶书 size=10 color=#b71c1c>
<br/>
我的大标题
<br/>&nbsp
</font>
</center>
</td></tr></table>

---

* <font face="楷体">字体</font>
* <font face="STCAIYUN">我是华文彩云</font>
* <font color=red>颜色</font>
* 颜色2
* <font size=5>我是尺寸</font>
* <table><tr><td bgcolor=#d3cbaf>背景色yellow</td></tr></table>

# [🚀](#Home)引用

**语法:**`> 引用`

* 区块引用：

  > 在段落开头使用 `>` 符号
  > 然后后面紧跟一个`空格`符号
  >
  > 连续输入文本即可
  >
* 嵌套引用：一个 > 符号是最外层，两个 > 符号是第一层嵌套

  > 最外层:一个 > 符号是最外层
  >
  >> 第一层嵌套:两个 > 符号是第一层嵌套
  >>
  >>> 第二层嵌套:以此类推
  >>>
  >>
  >
* 区块中使用列表:

> 1. 第一项
> 2. 第二项
>
>> + 第一项
>> + 第二项
>> + 第三项
>>
>

* 列表中使用区块：

  * 第一项

    > 添加四个空格的缩进
    >
  * 第二项
  * > 与列表嵌套一致
    >

# [🚀](#Home)注释

[^_^]: 
[^_^]: 本文图片位于简书图床


[^_^]: 如有需要可以备份至曲奇云盘


[^_^]: 

```markdown
#自己观看，导出不显示
[^_^]:注释0：美观又简洁
[comment]: <> "注释1：This is a comment, it will not be included"
[//]: <> "注释2：This is also a comment."
[//]: # "注释3：This may be the most platform independent comment"
```

# [🚀](#Home)表格

**快捷键：CTRL+T**

```
#### 插图表格
|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |
```

**表格添加序号：**

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

58

59

60

61

62

63

64

65

66

67

68

69

70

71

72

73

74

75

76

77

78

79

80

81

82

83

84

85

86

87

88

89

90

91

92

93

94

95

96

97

98

99

100

# <span id="列表">[🚀](#Home)列表</span>

> **索引：**[无序](#无序) | [有序](#有序) | [任务](#任务) | [嵌套](#嵌套) | [小结](#小结)
>

## <span id="无序">[🗼](#列表)无序列表:</span>

**语法:** `星号(*)、加号(+)或减号(-)`+空格+文字

```markdown
* 列表1
* 列表2
	* 列表3

- 列表1
	- 列表2
	- 列表3
  
+ 列表1
	+ 列表2
		+ 列表3

```

## <span id="有序">[🗼](#列表)有序列表:</span>

**语法:** 数字+`点(.)`+空格+文字

```markdown
1. 第一项
2. 第二项
   1. 第二项第一点
   2. 第二项第二点
```

## <span id="任务">[🗼](#列表)任务列表:</span>

**语法:**`减号`+空格+`[`+空格+`]`+空格+文本

- [X] 任务列表1
- [X] 任务列表2
- [ ] 任务列表3

## <span id="嵌套">[🗼](#列表)嵌套列表:</span>

* **同类列表:**按`Tab`键可以进行==缩进==,按`Shift+Tab`键可以进行==反向缩进==
* **不同列表:**在`子列表选项`前面添加`四个空格`即可

```markdown
1. 第一项：
    * 第一项嵌套的第一个元素
    * 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
  
```

## <span id="小结">[🗼](#列表)列表小结：</span>

# [🚀](#Home)代码(块)

**单独代码:**用`两个飘`/`反引号`号包裹

**代码块:**`三个飘号`+回车

# [🚀](#Home)插入表情

|         |       |         |
| ------- | ----- | ------- |
| :happy: | :sad: | :cry: |

# [🚀](#Home)分割线

**语法:** 三个及以上的星号(*)、减号(-)、底线(_)

```markdown
***

---

___
```

# <span id="链接">[🚀](#Home)链接      </span>

> **索引：**[文件]() | [图片链接](#图片链接) | [网址]() | ……
>

## [🗼](#链接)文件链接

**语法：**`中括号`+`小括号`

```markdown
[详见公式编辑教程](Markdown帮助.md)
[详见教程](../新建文本文AC档.txt)
[参考书](file:///C:/my_file.pdf)
[打开文件夹](./)
```

[详见教程](../2019年进展报告.docx)

[打开文件夹](./)

## [🗼](#链接)图片链接

**语法:**`感叹号`+`中括号`+`小括号`

* `中括号`内为:图片名
* `小括号`内为:图片地址,可以是本地地址,也可以是网址

```markdown
[^_^]:插入图片
![1](https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1)

[^_^]:插入图片并嵌套链接
[^_^]:先插入图片，然后对图片添加链接
[![2](0.assets/2.png)](http://airsar.jpl.nasa.gov/)

```

![1](https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1)

* 本地图片丢失则无法显示

![image-20200903092950228](Markdown帮助.assets/image01.png)

## [🗼](#链接)插入视频

### 插入在线视频

```html
<!--第一步：上传视频到我的微博-->
https://weibo.com

<!--第二步：复制视频播放链接-->
点开视频到主页面下播放，检查元素，复制代码，取出其中的链接
如：【//f.video.weibocdn.com/DjaSPabllx07GpgZsbVe01041200Q0pT0E010.mp4?label=mp4_1080p&template=1904x1004.25.0&trans_finger=706238e13862eac9158714b62b2988d4&media_id=4548801764196367&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=h&ps=3lckmu&uid=6etVnF&ab=966-g1&Expires=1600067261&ssig=cVJk8X5OfK&KID=unistore,video】

<!--第三步：插入Markdown视频框架-->
<video id="video" src="……" preload="true" controls="controls" controlslist="nodownload" width="100%" height="100%"></video>

<!--第四步：插入视频播放地址-->
将第二步提取的视频链接放到框架的地址源中

<!--第五步：高效管理个人资源-->
代码和效果如下：
<video id="video" src="//f.video.weibocdn.com/DjaSPabllx07GpgZsbVe01041200Q0pT0E010.mp4?label=mp4_1080p&template=1904x1004.25.0&trans_finger=706238e13862eac9158714b62b2988d4&media_id=4548801764196367&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=h&ps=3lckmu&uid=6etVnF&ab=966-g1&Expires=1600067261&ssig=cVJk8X5OfK&KID=unistore,video" preload="true" controls="controls" controlslist="nodownload" width="100%" height="100%"></video>

```

<video id="video" src="https://f.video.weibocdn.com/DjaSPabllx07GpgZsbVe01041200Q0pT0E010.mp4?label=mp4_1080p&template=1904x1004.25.0&trans_finger=706238e13862eac9158714b62b2988d4&media_id=4548801764196367&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=4&ot=h&ps=3lckmu&uid=6etVnF&ab=966-g1&Expires=1600067261&ssig=cVJk8X5OfK&KID=unistore,video" preload="true" controls="controls" controlslist="nodownload" width="100%" height="100%"></video>

### 插入本地视频

```
<video src="塞罕坝研究区概况.assets/NE修改引文样式.mp4"  controls="controls"></video>
```

参考：[markdown如何嵌入视频、音频](https://www.jianshu.com/p/3525536f9dcd)

## [🗼](#链接)普通网址

**语法:**`中括号`+`小括号`

```markdown
[Markdown语法大全(超级版)](https://www.jianshu.com/p/ebe52d2d468f)
[^_^]:也可以直接输入网址，如下
https://www.zhihu.com/question/52935929
```

> [Markdown语法大全(超级版)](https://www.jianshu.com/p/ebe52d2d468f)
>

## [🗼](#链接)iframe标签框架

嵌入B站视频:默认大小

<iframe src="https://player.bilibili.com/player.html?aid=90777003&bvid=BV1d7411F7Zs&cid=155016827&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

嵌入B站视频:同时调整大小

<iframe src="https://player.bilibili.com/player.html?aid=497757352&bvid=BV13K411j74i&cid=178625320&page=1" width="600" height="400"  scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

嵌入CSDN:调整大小

<iframe frameborder="0" src="https://blog.csdn.net/weixin_43898892/article/details/101990073" width="60" height="400" allowFullScreen="true"></iframe>

# [🚀](#Home)使用HTML标签

## 折叠内容

> **参考：**[Markdown折叠内容妙法](https://mp.weixin.qq.com/s?src=11&timestamp=1599654952&ver=2574&signature=*2cRNVdwRdT7Sk*XlWmBytK1HDWnlD4VbUrUWVRWo9YjJx7JOE4sHD5f22fmGgitBMmjnG1aI-15EqCITlN6SDhaJgFjK5t8HJi5fbqZ*wSX1o4eHfLvaWuWXghoHyrD&new=1)
>

### 折叠普通文本（多级折叠）

***冬瓜、黄瓜、西瓜、南瓜都能吃，什么瓜不能吃？***

<details>
<summary>点击显示答案</summary>
<pre>
傻瓜不能吃
<details>
<summary>多级折叠</summary>
<pre>
傻瓜傻瓜
</pre>
</details>
多级折叠与普通文本折叠
</pre>
</details>

### 折叠链接

<details>
<summary>下拉列表</summary>
第一点、<br><a href="http://www.w3school.com.cn/">阿斯顿</a><br>
第二点、<br><a href="#Home">阿斯顿锚点</a><br>
第三点、第三方<br>
</details>

### 折叠下图片

<details>
<summary>下拉查看图片</summary>
<img src="https://i.loli.net/2021/06/17/Imai3NYC4HWuZwp.png" alt="截屏_20210617_091622"  />
</details>

# [🚀](#Home)公式

* 插入公式块：`Ctrl+Shift+M`
* 设置里可以**开启公式编号**
* 用mathtype编辑后复制进来即可

  * 其中mathtype需要做一些设置
  * 设置、剪切和复制的偏好设置
  * MathML或Tex:选择**Texvc(LaTeX delimiters)**、确定
* 注意：这样改后word中不能使用复制粘贴
* word和Markdown的公式转换需要以mathtype为中介

  * 可以利用Word中math type的==切换TeX==来实现转换
  * 先复制后转换，先转换后复制，均可
* **切记：**当mathtype中包含中文字符时，复制粘贴会存在问题，中文消失

  * 不论是在math type中输入的中文还是markdown中输入的中文
  * 两者都不能相互转换
  * 可能需要稍作修改，

    * 若插入公式块，则需要删除两端的美元符号
    * 若插入无标号的公式，则直接复制粘贴即可
    * 若直接复制到word，则需要在代码两端添加美元符号
    * 若经过math type，则不需要添加
    * 可以从
* 若公式太多，最好是使用markdown，因为公式多了，word会比较卡。

  * 因为在word中公式以图片形式存在

  $$
  {{K}_{3}}=\frac{1}{\sqrt{2}}{{\left[ \begin{matrix}
     {{S}_{HH}}+{{S}_{VV}} & {{S}_{HH}}-{{S}_{VV}} & 2{{S}_{HV}}  \\
  \end{matrix} \right]}^{T}}=\frac{1}{\sqrt{2}}{{\left[ \begin{matrix}
     {{S}_{11}}+{{S}_{22}} & {{S}_{11}}-{{S}_{22}} & 2{{S}_{12}}  \\
  \end{matrix} \right]}^{T}}
  $$

# [🚀](#Home)流程图

[Markdown制作流程图](./Markdown制作流程图.md)

# [🚀](#Home)格式转换

Markdown与其他文件的转换

## Markdown转Xmind

超级简单：

1. xmind，文件，导入，markdown
2. 稍作修改即可

## Markdown转PPT

暂时先不学

---

# [🎯](#Home)汇总表

| 序号 | 项目               | Markdown基本语法                         | [Typora快捷键](Typora使用教程) |
| ---- | ------------------ | ---------------------------------------- | ------------------------------ |
|      | 标题               | 多个`#`+标题文字[^多个]                    | `Ctrl+数字`[^注1]                |
|      | 目录               | `[toc]`                                  | 无                             |
|      | 表格               | *比较复杂,暂时忽略*                      | `Ctrl+T`                       |
|      | 图片               | `感叹号`+`中括号`+`小括号`               | `Ctrl+Shift+I`                 |
|      | 网址               | `中括号`+`小括号`                        | `Ctrl+K`                       |
|      | 代码               | 用`两个飘`号包裹                         | `Ctrl+Shift+飘号`              |
|      | 代码块             | `三个飘号`+语言+回车+文本+回车`三个飘号` | `Ctrl+Shift+K`                 |
|      |                    |                                          |                                |
|      | 无序列表           | `*/+/-`+`空格`+文字``                    | `Ctrl+Shift+]`                 |
|      | 有序列表           | 数字+`点(.)`+空格+文字                   | `Ctrl+Shift+]`                 |
|      | 任务列表           | `减号`+空格+`[`+空格+`]`+空格+文本       | 无                             |
|      | 嵌套列表           | 同类`Tab`,不同`四空格`                   | 无                             |
|      | 自定义列表         | ?                                        | ?                              |
|      |                    |                                          |                                |
|      | 分割线             | `***`/`---`/`___`                        | 无                             |
|      | 下划线             | `<u>`+文本+`</u>`                        | `Ctrl+U`                       |
|      | 删除线             | `~~`+文本+~~``                           | `Alt+Shift+5`                  |
|      |                    |                                          |                                |
|      | 脚注               | `[`+`^`+文本+`]`                         | 无                             |
|      | 引用               | `>`+空格+文本                            | `Ctrl+Shift+Q`                 |
|      | 加粗               | `**`+文本+`**`                           | `Ctrl+B`                       |
|      | 倾斜               | `*`+文本+`*`                             | `Ctrl+I`                       |
|      |                    |                                          |                                |
|      | 新建文件           |                                          | `Ctrl+N`                       |
|      | 选中一整行         |                                          | `Ctrl+L`                       |
|      | 选中相同格式的文字 |                                          | `Ctrl+E`                       |
|      | 搜索               |                                          | `Ctrl+F`                       |
|      | 替换               |                                          | `Ctrl+H`                       |
|      | 跳转到文章开头     |                                          | `Ctrl+Home`                    |
|      | 跳转到文章结尾     |                                          | `Ctrl+End`                     |
|      |                    |                                          |                                |
|      |                    |                                          |                                |

[^注1]: 此处的数字不是小数字键盘上的数字,而是键盘上方数字键.


[^多个]: 几个`#`就是几级标题,如`#一级标题`, ` ##二级标题` ,` ###三级标题`


# [👣](#Home)参考文献/拓展阅读