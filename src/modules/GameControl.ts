//控制游戏的类
import ScorePanel from "./ScorePanel";
import Snake from "./snake";
import Food from "./Food";
export default class GameControl {
    snake: Snake;
    food: Food;
    scorepanel: ScorePanel;
    direction = 'ArrowRight';
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel(10,2);
       this.init();    
    }
    // 初始化函数
    init() {
        // 绑定键盘事件 按下时移动
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler(e: KeyboardEvent) {
        // 获取到蛇的方向 e.key
        this.direction = e.key
    }
    // 移动
    run() {
        // 得到蛇现在的位置
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case 'ArrowUp':
                Y -= 10;
                break;
            case 'ArrowDown':
                Y += 10;
                break;
            case 'ArrowLeft':
                X -= 10;
                break;
            case 'ArrowRight':
                X += 10
                break;
            default:
        }
        // 检测是否吃到食物
        this.eatFood();
        this.snake.X = X;
        this.snake.Y = Y;

        // try {

        // } catch (e) {
        //     // 进入到catch, 说明出现了异常，游戏结束，弹出一个提示信息
        //     alert(e.message+ 'GAME OVER!');
        //     // 将isLive设置为false
        // }
        clearTimeout;
        setTimeout(this.run.bind(this), 300 - this.scorepanel.level*30);
    }
    // 吃到食物
    eatFood() {
        if(this.food.X === this.snake.X && this.food.Y === this.snake.Y){
            this.food.change();
            this.scorepanel.scoreAdd();
            this.snake.addBody();
        }
    }

    // 检测撞墙 检查撞到自己 

}