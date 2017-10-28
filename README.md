
# Arcade-Game-Clone_zh
### Introduction
**经典街机游戏克隆**是主要利用JavaScript的面向对象、HTML5 Canvas等知识点来编写的一个小游戏，有利于更深一步理解JavaScript中几个常见并且容易混淆的概念：比如*构造函数、原型、原型链*、以及*实例对象*，在编写代码的过程中，你会更深一步的思考他们之间的关系。

### Clone && Run
* 下载： 
`git clone`
* 运行：
下载文件后，双击index.html文件，或者右击index.html文件 => 打开方式 => 选择任意你安装的浏览器

### Reference
以下几篇是我在做这个小项目时，寻找的一些不错的文档。我觉得看文档不是去看别人怎么完成的一个小游戏，而是去看别人对待问题的看法、如何分析的，以及解决问题的思路

[Frogger Game: Getting Started](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true)

[如果你不知道如何开始写”经典街机游戏克隆”的话](http://discussions.youdaxue.com/t/topic/32577)

[Classic Arcade Game 经典街机游戏克隆 第一弹 - 个人思路与完整实现](http://discussions.youdaxue.com/t/classic-arcade-game/36088)

### Rules
* 玩家（player）可通过键盘的up、left、down、right键来控制玩家的上下左右移动，但不许超过Canvas范围
* 敌人（enemy）已随意速度、随意位置移动，可循环的出现的Canvas上
* 玩家在穿越石头的过程中，不许碰到敌人，若接触到敌人，则game over,玩家回到初始位置重新开始，当玩家经过石头到达河岸且中途不被敌人触碰到，则为胜利
