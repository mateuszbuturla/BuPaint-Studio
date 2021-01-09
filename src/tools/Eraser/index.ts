type Coordinate = {
  x: number;
  y: number;
};

const Eraser = (
  originalMousePosition: Coordinate,
  newMousePosition: Coordinate,
  contextRef: any,
  width: number,
) => {
  const context = contextRef.current;
  if (context) {
    contextRef.current.globalCompositeOperation = 'destination-out';
    context.lineJoin = 'round';
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(originalMousePosition.x, originalMousePosition.y);
    context.lineTo(newMousePosition.x, newMousePosition.y);
    context.closePath();

    context.stroke();
  }
};

export default Eraser;
