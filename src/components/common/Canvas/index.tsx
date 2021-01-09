import React, { useCallback, useEffect, useRef, useState } from 'react';
import StyledCanvas from './StyledCanvas';
import ToolsEnum from 'enums/ToolsEnum';
import { Pen, Eraser } from 'tools';
import { useSelector } from 'react-redux';
import TypesApplicationState from 'types/TypesApplicationState';

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
  const contextRef = useRef<any | CanvasRenderingContext2D>(null);
  const [isHolding, setIsHolding] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
  const { tool: selectedTool } = useSelector((state: TypesApplicationState) => state.selectedTool);

  const startHolding = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsHolding(true);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.style.backgroundColor = '#fff';
    const context = canvas.getContext('2d');
    if (context && contextRef.current === null) {
      contextRef.current = context;
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startHolding);
    return () => {
      canvas.removeEventListener('mousedown', startHolding);
    };
  }, [startHolding]);

  const duringHolding = useCallback(
    (event: MouseEvent) => {
      if (isHolding) {
        const newMousePosition = getCoordinates(event);
        switch (selectedTool) {
          case ToolsEnum.PENCIL:
            if (mousePosition && newMousePosition) {
              Pen(mousePosition, newMousePosition, contextRef, 'black', 10);
            }
            break;
          case ToolsEnum.ERASER:
            if (mousePosition && newMousePosition) {
              Eraser(mousePosition, newMousePosition, contextRef, 10);
            }
            break;
        }
        setMousePosition(newMousePosition);
      }
    },
    [isHolding, mousePosition],
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousemove', duringHolding);
    return () => {
      canvas.removeEventListener('mousemove', duringHolding);
    };
  }, [duringHolding]);

  const stopHolding = useCallback(() => {
    setIsHolding(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mouseup', stopHolding);
    canvas.addEventListener('mouseleave', stopHolding);
    return () => {
      canvas.removeEventListener('mouseup', stopHolding);
      canvas.removeEventListener('mouseleave', stopHolding);
    };
  }, [stopHolding]);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
  };

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
