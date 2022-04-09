import styled from 'styled-components';
interface TitleProps {
  fullWidth?: boolean,
};

export default styled.h2<TitleProps>`
  max-width: 210px;
  padding: 8px 5px 0px 5px;
  font-size: 20px;
  color: #3e454a;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
`;