// 把一些经常用到的数字生命为常量保存
var stoneWidth = 101;
var stoneHeight = 83;

// 这是我们的玩家要躲避的敌人 
var Enemy = function(x, y, speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = x;
    this.y = y;
    this.speed = speed
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的，当敌人移除canvas时，设置再次进入的初始位置为10
    this.x = this.x > 505 ? 10 : this.x + this.speed * dt;
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 自己的玩家类
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
}
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
Player.prototype.update = function() {
    if (this.y < 0) {
        // 暂时先提供这种很不友好的提醒方式
        alert('恭喜您，通关成功！');
        this.reset(stoneWidth * 2, stoneHeight * 3.5);
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'left':
            this.x > 55 ? this.x -= stoneWidth : '';
            break;
        case 'up':
            this.y -= stoneHeight;
            break;
        case 'right':
            this.x < 400 ? this.x += stoneWidth  : '';
            break;
        case 'down':
            this.y < 300 ? this.y += stoneHeight : '';
            break;
        default: 
            return '';
    }
}

// 碰撞检测函数
Player.prototype.checkCollisions = function() {
    var that = this;
    allEnemies.forEach(function(enemy) {
        if (Math.abs(enemy.x - that.x) < 50 && Math.abs(enemy.y - that.y) < 40) {
            that.reset(stoneWidth * 2, stoneHeight * 3.5);
            alert('sorry,game over')
        }
    });
}
// 重置位置
Player.prototype.reset = function (x, y){
    this.x = x;
    this.y = y;
}
// 现在实例化所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
for(var i = 1; i <= 5; i++) {
    // enemy：x:随机产生，y:随机数产生，尽量控制在每一行石头中间，speed: 随机速度
    allEnemies.push(new Enemy(Math.random() * 500, stoneHeight * Math.ceil(Math.random() * 3) - 20, Math.random() * 500));
}
// 玩家默认位置：x: canvas底部水平居中位置,y:倒数第二行草坪中间
var player = new Player(stoneWidth * 2, stoneHeight * 3.5);

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
