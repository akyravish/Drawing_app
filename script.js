const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let color = 'black';
let size = 2;
let isMouse = false;
let x;
let y;

const drawCircle = (x, y) => {
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
	ctx.lineWidth = size * 2;
	ctx.stroke();
};

canvas.addEventListener('mousedown', (e) => {
	isMouse = true;
	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
	isMouse = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
	if (isMouse) {
		x2 = e.offsetX;
		y2 = e.offsetY;
		drawCircle(x2, y2);
		drawStroke(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});
