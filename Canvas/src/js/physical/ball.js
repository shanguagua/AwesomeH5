function Ball(radius,color,text){
    this.radius = radius || 40;
    this.color = color || 'gold'
    this.x = 0;
    this.y = 0;
    this.lineWidth = 1;
    this.text = text;
}

Ball.prototype.draw = function(ctx){
    ctx.save();
    ctx.translate(this.x,this.y); // 设置新的坐标原点
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(0,0,this.radius,0,Math.PI*2,false);
    ctx.closePath();
    ctx.font = '14px Arial';   
    ctx.fillText(this.text,-8,-26)
    ctx.fill(); // 填充图形
    ctx.stroke(); // 描绘边框
    ctx.restore();
}