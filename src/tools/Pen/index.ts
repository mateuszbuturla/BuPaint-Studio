type Coordinate = {
  x: number;
  y: number;
};

const Pen = (
  originalMousePosition: Coordinate,
  newMousePosition: Coordinate,
  contextRef: any,
  color: string,
  width: number,
) => {
  const context = contextRef.current;
  if (context) {
    contextRef.current.globalCompositeOperation = 'source-over';
    context.strokeStyle = color;
    context.lineJoin = 'round';
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(originalMousePosition.x, originalMousePosition.y);
    context.lineTo(newMousePosition.x, newMousePosition.y);
    context.closePath();

    context.stroke();
  }
};

export default Pen;
