import styled from 'styled-components';


// multi-use
export const Grid = styled.div`
  margin: 5px 5px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${props => props.size};
`;
