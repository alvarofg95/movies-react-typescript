import styled from 'styled-components';

interface WrapperProps {
  flex?: boolean,
  border?: boolean,
  padding?: number,
  margin?: string,
  hover?: boolean,
  width?: string,
  position?: string,
};

export default styled.div<WrapperProps>`
  border: ${props => props.border ? '1px solid #e3e3e3' : ''};
  border-radius: ${props => props.border ? '15px' : ''};
  padding: ${props => `${props.padding || 0}px`};
  ${props => props.flex ? 'display: flex; justify-content: space-between; flex-wrap: wrap' : 'display: block'};
  overflow: hidden;
  height: auto;
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || 'auto'};
  ${props => props.position ? `position:${props.position};` : ''}
  &:hover {
    ${props => props.hover ? `opacity: 1; background-color: #e3e3e3` : ''};
  }
`;