import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #afafaf85;
  box-sizing: border-box;
`;

export const ModalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 300px;
  height: 250px;
  background: #fff;
  border-radius: 15px;
  padding: 15px;
  position: relative;
`

export const ModalTitle = styled.span`
  color: #000;
  font-size: 30px;
  font-weight: 800;
`

export const IconClose = styled.span`
  font-size: 30px;
  position: absolute;
  top: 20px;
  right: 40px;
  cursor: pointer;
`

