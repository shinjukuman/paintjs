const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// pixel manipulating size
canvas.width = 450;
canvas.height = 450;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = "2.5";

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        // Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
        ctx.beginPath();
        // Moves the starting point of a new sub-path to the (x, y) coordinates.
        ctx.moveTo(x, y);
    } else {
        // Connects the last point in the current sub-path to the specified (x, y) coordinates with a straight line.
        ctx.lineTo(x, y);
        // Strokes the current sub-paths with the current stroke style.
        ctx.stroke();
    }
}

function onMouseDown(event) {
    startPainting();
}

function onMouseUp(event) {
    stopPainting();
}

function onMouseLeave(event) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
}
