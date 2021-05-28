const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

color = 'black';
size = 20;

const drawCirlce = (x, y) => {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
};

const drawStroke = (x1, y1, x2, y2) => {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
};

drawCirlce(200, 200);
drawStroke(300, 200, 300, 500);
