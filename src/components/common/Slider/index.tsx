import React from 'react';
import {
  StyledSliderContainer,
  StyledSliderLabel,
  StyledSlider,
  StyledAdditionalTextInput,
} from './StyledSlider';

interface Props {
  label: string;
  id: string;
  onChange: any;
  value: number;
  additionalTextInput?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const Slider = ({
  label,
  id,
  onChange,
  value,
  additionalTextInput,
  min = 1,
  max = 200,
  step = 1,
}: Props) => {
  return (
    <StyledSliderContainer>
      <StyledSliderLabel htmlFor={id}>{label}</StyledSliderLabel>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        additionalTextInput
      />
      {additionalTextInput && (
        <StyledAdditionalTextInput id={id} value={value} onChange={onChange} />
      )}
    </StyledSliderContainer>
  );
};

export default Slider;
