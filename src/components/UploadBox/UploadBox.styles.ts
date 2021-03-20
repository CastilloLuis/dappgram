import styled from 'styled-components';

export const UploadBoxContainer = styled.div`
  width: 100%;
  height: 100%;  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 25px 0;
`;

export const UploadBoxImage = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.07);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  transition: all 0.1s ease-in-out;
  cursor: pointer;

  img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }

  i {
    transition: all 0.2s ease-in-out;
    font-style: normal;
  }
  
  &:hover {
    i {
      font-size: 30px;
    }
  }
`;

export const InputFieldContainer = styled.input`
  width: 270px;
  height: 50px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 10px;
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.07);
  border: 1px solid transparent;
  margin: 15px 0;
  &:hover {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.07);
  }
`;

export const Button = styled.button`
  width: 270px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  background: #2980b9; /* fallback for old browsers */
  background: linear-gradient(to right,#82c9f8,#6dd5fa,#03c2ee);
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.07);
  span {
    color: #fff;
    font-size: 16px;
  }

  ${props => props.disabled && 'background: #cacaca; cursor: no-drop;'}
`;

export const GoBackLabel = styled.div`
  font-size: 12px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
