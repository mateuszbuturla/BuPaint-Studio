import React, { useCallback, useEffect, useRef, useState } from 'react';
import StyledCanvas from './StyledCanvas';
import ToolsEnum from 'enums/ToolsEnum';
import { Pen, Eraser, ColorDropper, Rectangle } from 'tools';
import { useSelector } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';
import selectedTool from 'actions/selectedTool';
import { fabric } from 'fabric';

interface CanvasProps {
  width: number;
  height: number;
}

type Coordinate = {
  x: number;
  y: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { tool: selectedTool } = useSelector((state: TypesApplicationState) => state.selectedTool);
  const { brushSize, brushOpacity } = useSelector(
    (state: TypesApplicationState) => state.toolSettings,
  );
  const { color } = useSelector((state: TypesApplicationState) => state.selectedColor);

  const [canvas, setCanvas] = useState<fabric.Canvas | undefined>();

  useEffect(() => {
    if (!canvasRef) return;

    setCanvas(
      new fabric.Canvas(canvasRef.current, {
        renderOnAddRemove: true,
        isDrawingMode: true,
        backgroundColor: '#fff',
      }),
    );
  }, [setCanvas]);

  return (
    <>
      <StyledCanvas ref={canvasRef} height={height} width={width} />
    </>
  );
};

Canvas.defaultProps = {
  width: 1000,
  height: 700,
};

export default Canvas;
