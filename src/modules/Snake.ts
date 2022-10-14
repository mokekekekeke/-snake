// 定义snake类
export default class Snake {
    // 获取蛇节点
    head: HTMLElement;
    //表示蛇的身体
    Bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.getElementById('head')!;
        this.Bodies = this.element.getElementsByTagName('div');
    }
    // 定义方法
    // 每吃到一个就增加一节
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");//添加到结束标签前
    }
    moveBody() {
        for (let i = this.Bodies.length - 1; i > 0; i--) {
            (this.Bodies[i] as HTMLElement).style.left = (this.Bodies[i - 1] as HTMLElement).offsetLeft + 'px';
            (this.Bodies[i] as HTMLElement).style.top = (this.Bodies[i - 1] as HTMLElement).offsetTop + 'px';
        }
    }
    // 获取位置
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {

        if (this.X === value) {
            return;
        }

        //检测撞墙
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了~~");
        }
        // 检测掉头
        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.Bodies[1] && (this.Bodies[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向方向继续移动
            if (value > this.X) {
                // 如果新值value大于旧值X， 则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X - 10;
            } else {
                // 向左走
                value = this.X + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        // 检测撞到自己
        this.checkBody();

    }
    set Y(value: number) {

        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了~~");
        }
        // 修改Y时，是在修改水平坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
        if (this.Bodies[1] && (this.Bodies[1] as HTMLElement).offsetTop === value) {
            // console.log('垂直方向发生了掉头');
            // 如果发生了掉头，让蛇向方向继续移动
            if (value > this.Y) {
                // 如果新值value大于旧值Y， 则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.Y - 10;
            } else {
                // 向左走
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        // 检测撞到自己
        this.checkBody();
    }
    // 检测是否撞到自己
    checkBody() {
        for (let i = 5; i < this.Bodies.length; i++) {
            if ((this.Bodies[i - 1] as HTMLElement).offsetLeft === this.X && (this.Bodies[i - 1] as HTMLElement).offsetTop === this.Y) {
                throw new Error('蛇撞到了自己')
            }
        }

    }
}