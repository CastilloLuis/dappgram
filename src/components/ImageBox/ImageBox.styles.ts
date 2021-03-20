import styled from 'styled-components';

export const ImageBoxContainer = styled.div`
  height: 100%;
  margin: 20px 0;
`;

export const ImageBoxWrapper = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0 10px;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.07);
  img {
    max-width: 100%;
    max-height: 100%;
  }
  span {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -20px;
    right: -20px;
    background: #fff;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.07);
    &:hover {
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export const DescriptionBox = styled.div`
  width: 270px;
  height: auto;
  padding: 15px;
  margin: 5px 0;
  border-radius: 10px;
  word-wrap: break-word;
  box-sizing: border-box;
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.07);
`;

