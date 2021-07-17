import styled from "styled-components";

// simple css button style that used for favourite button
const StyledButton = styled.button`
  border: 1px solid #e8ecfa;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  &.selected {
    background-color: #e8ecfa;
    color: #5c5b6f;
    border-color: #e8ecfa;
  }
  &:hover {
    color: #5c5b6f;
    background-color: #e8ecfa;
    border-color: #e8ecfa;
  }
`;
export default StyledButton;
