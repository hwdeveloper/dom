
function GridView(id) {
    this.id=id;
    this.init=function (gridData) {
        //1,创建节点对象
        var gridV =document.createElement('div');
        //2,设置class样式属性
        gridV.setAttribute('class','box');
        //3,设置产品的下标
        var index = 0;
        //4，设置每行的容器
        var  rowBox;
        gridData.forEach(function (product) {
            //5,每5个产品换行
            if(index%5==0){
                rowBox =document.createElement('div');
                rowBox.setAttribute('class','rowBox');
                gridV.appendChild(rowBox);
            }
            //6创建每个产品的盒子
            var item = document.createElement('div');
            //7,设置产品的class属性
            item.setAttribute('class','item');

            var itemImg =document.createElement('img');
            itemImg.setAttribute('class','itemImg');
            itemImg.src=product.img;
            item.appendChild(itemImg);

            var title =document.createElement('p');
            title.setAttribute('class','title');
            title.innerHTML=product.price;
            item.appendChild(title);

            var introduce =document.createElement('p');
            introduce.setAttribute('class','introduce');
            introduce.innerHTML=product.introduce;
            item.appendChild(introduce);
            rowBox.appendChild(item);
            index++;
        })

        var box =document.getElementById(this.id);
        box.appendChild(gridV);
    }
}
