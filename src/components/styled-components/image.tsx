import styled from 'styled-components';

interface WrapperProps {
  src: string,
};

export default styled.img<WrapperProps>`
  src: ${props => props.src};
`;