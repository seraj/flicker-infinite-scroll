import styled from "styled-components";
// i used styled-component and basic opacity  and transition style for making those effect happened.
export const Overley = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #00000060;
  .favourite-btn {
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    bottom: 20px;
  }
`;
export const Caption = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  .image {
    &-title {
      font-weight: bold;
      font-size: 15px;
      // the line under the image title
      &:after {
        background-color: #fff;
        content: "";
        display: block;
        width: 70px;
        height: 2px;
        margin: 10px auto;
        border-radius: 2px;
      }
    }
    &-owner {
      font-size: 13px;
      font-style: italic;
      font-weight: bold;
    }
  }
`;

export const Container = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 2px 0px 0px rgb(0 0 0 / 15%);
  img {
    max-width: 100%;
    height: 100%;
    width: 100%;
  }
  &:hover ${Overley} {
    opacity: 1;
  }
`;
