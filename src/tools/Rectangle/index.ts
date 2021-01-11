type Coordinate = {
  x: number;
  y: number;
};

const Rectangle = (
  startPoint: Coordinate,
  endPoint: Coordinate,
  contextRef: any,
  color: string,
  width: number,
) => {
  const context = contextRef.current;
  if (context) {
    contextRef.current.globalCompositeOperation = 'source-over';
    contextRef.current.strokeStyle = color;
    contextRef.current.lineWidth = width;
    contextRef.current.beginPath();
    const rectWidth = endPoint.x - startPoint.x;
    const rectHeight = endPoint.y - startPoint.y;
    contextRef.current.rect(startPoint.x, startPoint.y, rectWidth, rectHeight);
    context.closePath();
    contextRef.current.stroke();
  }
};

export default Rectangle;
