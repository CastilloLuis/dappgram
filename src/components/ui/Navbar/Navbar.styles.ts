import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;  
  z-index: 9;
  top: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 7px 29px 0 rgba(0,0,0,0.07);
  div {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      padding-right: 20px;
    }
    span {
      font-family: Poppins;
      font-weight: 600;
      font-size: 25px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative
`;

export const Label = styled.div`

`;