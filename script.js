const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clear = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let color = 'black';
let size = 10;
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

increaseBtn.addEventListener('click', () => {
	size++;

	if (size > 20) {
		size = 20;
	}

	sizeEl.innerHTML = size;
});

decreaseBtn.addEventListener('click', () => {
	size--;

	if (size < 1) {
		size = 1;
	}

	sizeEl.innerHTML = size;
});

colorEl.addEventListener('change', (e) => {
	color = e.target.value;
});

canvas.addEventListener('mousedown', (e) => {
	isMouse = true;
	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
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
