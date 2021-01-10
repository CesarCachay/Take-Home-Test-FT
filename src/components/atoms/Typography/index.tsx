import styled from 'styled-components';
import { TypographyProps } from './types';

const Typography: React.FC = styled.h2<TypographyProps>`
  color: ${(props) => props.color || '#000000'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  text-align: ${(props) => props.textAlign || 'left'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};

  @media screen and (max-width: 768px) and (min-width: 360px) {
    ${(props) => props.resWeight && `font-weight: ${props.resWeight};`}
    ${(props) => props.resSize && `font-size: ${props.resSize};`}
    ${(props) => props.resAlign && `text-align: ${props.resAlign};`}
  }
`;

export default Typography;
