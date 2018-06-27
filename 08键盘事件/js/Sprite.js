function Sprite() {
    //向下移动的动画图片
    var npcDown = ['img/down1.png', 'img/down2.png', 'img/down3.png', 'img/down4.png', 'img/down5.png', 'img/down6.png', 'img/down7.png'];
    //向上移动的动画图片
    var npcUp = ['img/up1.png', 'img/up2.png', 'img/up3.png', 'img/up4.png', 'img/up5.png', 'img/up6.png', 'img/up7.png'];
    //向左移动的动画图片
    var npcLeft = ['img/left1.png', 'img/left2.png', 'img/left3.png', 'img/left4.png', 'img/left5.png', 'img/left6.png', 'img/left7.png'];
    //向右移动的位置
    var npcRight = ['img/right1.png', 'img/right2.png', 'img/right3.png', 'img/right4.png', 'img/right5.png', 'img/right6.png', 'img/right7.png'];
    //图片
    var img;
    //坐标
    var imgX = 400;
    var imgY = 200;
    //数据初始化
    this.init = function () {
        //1,创建图片
        img = document.createElement('img');
        //2,设置位置关系
        img.style.position = "absolute";
        img.style.left = imgX + "px";
        img.style.top = imgY + "px";
        //3,设置图片
        img.src = 'img/down1.png';

        //4，把图片添加到body
        document.body.appendChild(img);

    }

    var index=0;

    this.onkeypress = function (ev) {
        var keyCode = ev.keyCode;
        switch (keyCode) {
            case 100://右
                this.moveRight();
                break;
            case 119://上
                this.moveUp();
                break;
            case 97://左
                this.moveLeft();
                break;
            case 115:
                this.moveDown();
                break;
        }
    }
    
    this.moveLeft=function () {
        if(index>=7)
            index=0;
        img.src = npcLeft[index];
        index++;

        imgX =imgX-10;
        img.style.left = imgX + "px";
    }
    this.moveRight=function () {
        if(index>=7)
            index=0;
        img.src = npcRight[index];
        index++;

        imgX =imgX+10;
        img.style.left = imgX + "px";
    }
    this.moveUp=function () {
        if(index>=7)
            index=0;
        img.src = npcUp[index];
        index++;

        imgY =imgY-10;
        img.style.top = imgY + "px";
    }
    this.moveDown=function () {
        if(index>=7)
            index=0;
        img.src = npcDown[index];
        index++;

        imgY =imgY+10;
        img.style.top = imgY + "px";
    }

    var NPC_DOWN=0;
    var NPC_UP=NPC_DOWN+1;
    var NPC_LEFT=NPC_UP+1;
    var NPC_RIGHT=NPC_LEFT+1;
    var state = NPC_LEFT;

    var time =0;
    this.run=function () {
        time++;
        if(time>10)
        this.logic();
        this.move();
    }
    
    this.logic=function () {
        var random = Math.floor(Math.random()*20);
        if(random<5){
            state=NPC_RIGHT;
        }else if(random>=5&&random<10){
            state=NPC_LEFT;
        }
        else if(random>=10&&random<15){
            state=NPC_UP;
        }
        else {
            state=NPC_DOWN;
        }
        time=0;
    }
    
    this.move=function () {
        switch(state){
            case NPC_LEFT:
                this.moveLeft();
                if(imgX<=0)
                    state=NPC_RIGHT;
                break;
            case NPC_RIGHT:
                this.moveRight();
                if(imgX>=1200)
                    state=NPC_LEFT;
                break;
            case NPC_UP:
                this.moveUp();
                break;
            case NPC_DOWN:
                this.moveDown();
                break;
        }
    }

}