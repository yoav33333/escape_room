window.breakout = {
    getCanvasContext: (canvas) => {
        return canvas.getContext('2d');
    },
    clearCanvas: (context, width, height) => {
        context.clearRect(0, 0, width, height);
    },
    drawRect: (context, x, y, width, height, color) => {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    },
    drawCircle: (context, x, y, radius, color) => {
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
    }
};
