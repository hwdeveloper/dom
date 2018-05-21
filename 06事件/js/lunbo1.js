function Lunbo(infors) {
    this.infors=infors;
    var length=infors.length;
    var ul;
    var lunbo;
    var index=0;
    this.init=function () {
        //1,创建节点
        ul = document.createElement('ul');
        ul.setAttribute('id','imagegallery');
        document.body.appendChild(ul);
        //2,遍历数据
        this.infors.forEach(function (infor) {
            //1,创建li节点
            this.li =document.createElement('li');
            //2,创建图片标签
            this.img = document.createElement('img');
            //3,设置监听
            this.img.onclick=function (ev) {
                //(1)获得点击图片的地址

                var src = ev.target.src;
                console.log(src);
                //(2)获得显示图片
                lunbo.src=src;

            }
            //4,设置图片的相关信息
            this.img.src=infor.url;
            this.img.width='200';
            this.img.alt=infor.alt;
            this.img.setAttribute('id','img'+index);

            //5，把图片添加到li
            this.li.appendChild(this.img);
            ul.appendChild(this.li);

            index++;
        })
        index=0;

       lunbo=document.createElement('img');
        lunbo.width=500;
        lunbo.src=infors[index].url;
        lunbo.alt=infors[index].alt;

        document.body.appendChild(lunbo);
    }
    
    this.run=function () {
        //当前显示图片的下标超过数组的长度
        if(index>=length){
            //设置为图片开始
            index=0;
        }
        this.listImage();
        this.bigImageRun();
    }

    //处理大的图片显示效果
    this.bigImageRun=function () {
        //获得图片的地址，给图片标签赋值
        lunbo.src=infors[index].url;
        //下标增加
        index++;
    }
    var buffer;
    this.listImage=function () {

        if(buffer!=null){
            buffer.style.border='';
        }
        var currentImage=document.getElementById('img'+index);
        currentImage.style.border='#8ae234 1px solid';

        buffer =currentImage;
    }
    
}