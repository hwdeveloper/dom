function Sprite() {
    //向下移动的动画图片
    var npcDown = ['img/down1.png', 'img/down2.png', 'img/down3.png', 'img/down4.png', 'img/down5.png', 'img/down6.png', 'img/down7.png'];
    //向上移动的动画图片
    var npcUp = ['img/up1.png', 'img/up2.png', 'img/up3.png', 'img/up4.png', 'img/up5.png', 'img/up6.png', 'img/up7.png'];
    //向左移动的动画图片
    var npcLeft = ['img/left1.png', 'img/left2.png', 'img/left3.png', 'img/left4.png', 'img/left5.png', 'img/left6.png', 'img/left7.png'];
    //向右移动的位置
    var npcRight = ['img/right1.png', 'img/right2.png', 'img/right3.png', 'img/right4.png', 'img/right5.png', 'img/right6.png', 'img/right7.png'];


    //按键按下的状态值
    var KEY_UP=119;
    var KEY_DOWN=115;
    var KEY_LEFT=97;
    var KEY_RIGHT=100;

    //角色的图片元素
    var img;

    //图片的坐标
    var imgX=500;
    var imgY=100;

    //图片的大小
    var imgWidth=32;
    var imgHeight=84;

    //速度
    var speedX=10;
    var speedY=10;

    //图片的下标
    var index=0;

    //屏幕的宽度和高度
    var widthS=document.body.clientWidth;
    var heightS=800;

    this.init=function () {
        //1,创建图片元素
        img = document.createElement('img');
        //2,设置位置
        img.style.position="absolute";
        img.style.left=imgX+"px";
        img.style.top=imgY+"px";

        //设置图片的大小
        img.style.width=imgWidth;
        img.style.height=imgHeight;

        img.src=npcDown[index];

        document.body.appendChild(img);

    }

    this.onkeypress=function(ev) {
        //1,获得键盘按下去的按键
        var keyCode = ev.keyCode;
        switch (keyCode) {
            case KEY_RIGHT:
                this.moveRight();
                break;
            case KEY_UP:
                this.moveUp();
                break;
            case KEY_LEFT:
                this.moveLeft();
                break;
            case KEY_DOWN:
                this.moveDown();
                break;
        }
    }

    this.moveRight=function () {
        //1,处理图片的位移
        imgX = imgX+speedX;
        if(imgX>=widthS-imgWidth){

            state=MOVE_LEFT;
        }
        img.style.left=imgX+"px";

        //2,处理图片的动画
        index++;
        if(index>=7)
            index=0;
        img.src=npcRight[index];

    }

    this.moveLeft=function () {
        imgX = imgX-speedX;
        if(imgX<=0){

            state=MOVE_RIGHT;
        }
        img.style.left=imgX+"px";

        //2,处理图片的动画
        index++;
        if(index>=7)
            index=0;
        img.src=npcLeft[index];
    }

    this.moveUp=function () {
        imgY = imgY-speedY;
        if(imgY<=0){

            state=MOVE_DOWN;
        }
        img.style.top=imgY+"px";

        //2,处理图片的动画
        index++;
        if(index>=7)
            index=0;
        img.src=npcUp[index];
    }

    this.moveDown=function () {
        imgY = imgY+speedY;
        if(imgY>=heightS-imgHeight){
            state=MOVE_UP;
        }
        img.style.top=imgY+"px";

        //2,处理图片的动画
        index++;
        if(index>=7)
            index=0;
        img.src=npcDown[index];
    }

    var time=0;

    //运动方向的状态值
    var MOVE_UP=0;
    var MOVE_DOWN=MOVE_UP+1;
    var MOVE_LEFT=MOVE_DOWN+1;
    var MOVE_RIGHT=MOVE_LEFT+1;
    //状态值
    var state =MOVE_DOWN;
    this.run=function() {
        //角色思考怎么走
        this.logic();
        //角色怎么走
        this.move();
    }
    this.logic=function () {
        time++;
        if(time>10){
            //思考
            var random =Math.floor(Math.random()*20);
            if(random<5){
                //向左走
                state=MOVE_LEFT;
            }else if(random>=5&&random<10){
                //向右走
                state=MOVE_RIGHT;
            }else if(random>=10&&random<15){
                //向上走
                state=MOVE_UP;
            }else {
                //向下走
                state=MOVE_DOWN;
            }
            time=5+Math.floor(Math.random()*10);
        }
    }

    this.move=function () {

        switch(state){
            case MOVE_UP:
                this.moveUp();
                break;
            case MOVE_DOWN:
                this.moveDown();
                break;
            case MOVE_LEFT:
                this.moveLeft();
                break;
            case MOVE_RIGHT:
                this.moveRight();
                break;
        }
    }
}

