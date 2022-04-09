import styled from 'styled-components';

interface SearchInputProps {
  onChange: any,
}

export default styled.input<SearchInputProps>`
  height: 20px;
  width: 300px;
  margin-right: 4%;
  margin-top: 12px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 5px;
  onchange: ${props => props.onChange};
`;