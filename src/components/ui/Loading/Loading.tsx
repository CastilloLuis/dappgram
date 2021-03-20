import React from 'react';
import DAppLogo from '../../../assets/dapp.png';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 70px;
    height: auto;
  }
  span {font-size: 20px;}
`;

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <LoadingContainer>
      <img src={DAppLogo} alt="DApp loading" />
      <span>Loading...</span>
    </LoadingContainer>
  )
}