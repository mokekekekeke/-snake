// 定义食物类 
export default  class Food {
    // 指定一个属性 获取到食物节点
    element: HTMLElement;
    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
        this.change();
    }
    change() {
        // 生成一个随机位置
        let Left = Math.round(Math.random() * 29) * 10;
        let Top = Math.round(Math.random() * 28) * 10;
        this.element.style.left = Left + 'px';
        this.element.style.top = Top + 'px';
    }
    //定义food需要的方法
    // 获取食物的x,Y坐标
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
}
