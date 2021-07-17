import styled from "styled-components";

export const Container = styled.div`
  margin: 30px;
  text-align: center;
`;
export const Loader = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;
