import styled from 'styled-components';

const StyledSliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 5px;
`;

const StyledSliderLabel = styled.label`
  width: 100%;
  color: ${(props) => props.theme.colors.color};
`;

interface StyledSliderProps {
  additionalTextInput?: boolean;
}

const StyledSlider = styled.input<StyledSliderProps>`
  width: ${(props) => (props.additionalTextInput ? 'calc(100% - 55px)' : 'calc(100% - 10px)')};
`;

const StyledAdditionalTextInput = styled.input`
  width: 35px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 10px;
  font-size: 17px;
  color: ${(props) => props.theme.colors.color};
`;

export { StyledSliderContainer, StyledSliderLabel, StyledSlider, StyledAdditionalTextInput };
