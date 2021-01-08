import styled from 'styled-components';
import { InputProps } from './types';

const Input = styled.input<InputProps>`
  width: ${(props) => props.width || 'auto'};
  font-size: ${(props) => props.fontSize || '15px'};
  padding: ${(props) => props.padding || '15px 30px'};
  margin: ${(props) => props.margin || '0'};
  border-radius: 5px;
  appearance: none;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.borderColor};
  ::placeholder {
    color: ${(props) => props.theme.colors.placeholderColor};
    font-style: italic;
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export default Input;
