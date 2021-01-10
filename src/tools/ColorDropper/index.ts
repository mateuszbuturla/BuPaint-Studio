import store from '../../store';
import { default as selectedColorActions } from 'actions/selectedColor/actions';

type Coordinate = {
  x: number;
  y: number;
};

const ColorDropper = (currentMousePosition: Coordinate, contextRef: any) => {
  const colorData = contextRef.current.getImageData(
    currentMousePosition.x,
    currentMousePosition.y,
    1,
    1,
  ).data;
  store.dispatch(
    selectedColorActions.setSelectedColor({ r: colorData[0], g: colorData[1], b: colorData[2] }),
  );
};

export default ColorDropper;
