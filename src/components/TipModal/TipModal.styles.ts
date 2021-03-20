import styled from 'styled-components';

export const AmountsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Amount = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #a1dcee;
  margin: 0 10px;
  border: 1px solid transparent;

  transition: all 0.1s ease-in-out;

  span {
    font-size: 10px;
  }

  &:hover {
    cursor: pointer;
    background: white;
    border-color: #a1dcee;
  }
`;
