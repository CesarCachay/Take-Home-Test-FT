import styled from 'styled-components';
import { ContainerProps } from './types';

const Container = styled.div<ContainerProps>`
  position: ${(props) => props.position || 'relative'};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  ${(props) => !props.fluid && 'max-width: 1200px;'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  ${(props) => props.bgColor && `background-color: ${props.bgColor};`}

  @media screen and (max-width: 768px) and (min-width: 360px) {
    ${(props) => props.resDisplay && `display: ${props.resDisplay};`}
    ${(props) => props.resMargin && `margin: ${props.resMargin};`}
    ${(props) => props.resPadding && `padding: ${props.resPadding};`}
    ${(props) => props.resHeight && `height: ${props.resHeight};`}
    ${(props) => props.resWidth && `width: ${props.resWidth};`}
    ${(props) => props.resAlignItems && `align-items: ${props.resAlignItems};`}
    ${(props) => props.resJustify && `justify-content: ${props.resJustify};`}
    ${(props) => props.resDirection && `flex-direction: ${props.resDirection};`}
  }
`;

export default Container;
