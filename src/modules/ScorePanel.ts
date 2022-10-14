// 定义记分牌的类 
export default class ScorePanel {
    score: number = 0;
    level: number = 1;
    scoreEle: HTMLElement;
    levEle: HTMLElement;
    // 最大等级
    MaxLevel: number;
    // 等级提升规则
    UpScore: number;

    constructor(MaxLevel = 10, UpScore = 2) {
        this.scoreEle = document.getElementById('score')!;
        this.levEle = document.getElementById('level')!;
        this.MaxLevel = MaxLevel;
        this.UpScore = UpScore;

    }
    // 设置加分
    scoreAdd() {
        this.scoreEle.innerHTML = ++this.score + '';
        // 分数增加10 等级提升一次        
        if (this.score % this.UpScore === 0) {
            this.levUp();
        }
    }
    // 设置等级提升
    levUp() {
        // 限制最大等级 
        if (this.level < this.MaxLevel) {
            this.levEle.innerHTML = ++ this.level + '';
        }
    }
}
