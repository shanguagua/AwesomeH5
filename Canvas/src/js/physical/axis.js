// 用于绘制坐标系
/**
 * 
 * @param {Number} x 原点x坐标
 * @param {Number} y 原点y坐标
 * @param {Number} xl x轴正向长度
 * @param {Number} yl y轴正向长度
 * @param {Boolean} leftX 是否绘制x的负半轴
 * @param {Boolean} topY 是否绘制y的负半轴
 * @param {String} c 坐标,坐标字体的颜色
 */
function Axis(x,y,xl,yl,leftX,topY,color){
    this.color = color || 'gold'
    this.x = x;
    this.y = y;
    this.xl = xl;
    this.yl = yl;
    this.leftX = leftX;
    this.topY = topY;
    this.lineWidth = 1;
}

/**
 * 
 * @param {Object} ctx 绘图对象context
 */
Axis.prototype.draw = function(ctx){
    ctx.save();
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.font = '14px Arial';    
    ctx.beginPath();  
    // 绘制x轴正半轴
	ctx.moveTo(0,0);
	ctx.lineTo(this.xl,0);  
	ctx.lineTo(this.xl-10,-10);
	ctx.moveTo(this.xl-10,10);
	ctx.lineTo(this.xl,0);
	ctx.fillText('x轴',this.xl+10,5)
	// 绘制x轴负半轴
	if(this.leftX){
		ctx.moveTo(0,0);
		ctx.lineTo(-this.xl,0);
	}
	// 绘制y轴正半轴
	ctx.moveTo(0,0)
	ctx.lineTo(0,this.yl);
	ctx.lineTo(10,this.yl-10);
	ctx.moveTo(-10,this.yl -10);
	ctx.lineTo(0,this.yl);
	ctx.fillText('y轴',-10,this.yl+18);
	if(this.topY) {
		ctx.moveTo(0,0);
		ctx.lineTo(0,-this.yl);
	}
	// 原点
	ctx.fillText('原点o',-40,5)
	
    ctx.stroke(); // 描绘边框
    ctx.restore();
}