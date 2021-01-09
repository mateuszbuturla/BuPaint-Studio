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
}

const Slider = ({ label, id, onChange, value, additionalTextInput }: Props) => {
  return (
    <StyledSliderContainer>
      <StyledSliderLabel htmlFor={id}>{label}</StyledSliderLabel>
      <StyledSlider
        type="range"
        min="1"
        max="200"
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
