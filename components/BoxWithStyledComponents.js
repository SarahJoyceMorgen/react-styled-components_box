import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$isBlack ? 'black' : 'green')};
  transition: background-color 0.3s;

  &:hover {
    background-color: red;
  }
`;

const BoxWithStyledComponents = ({ isBlack }) => {
    return <StyledBox $isBlack={isBlack} />;
  };
  
  export default BoxWithStyledComponents;