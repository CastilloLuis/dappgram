import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const DashboardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UploadImage = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background: #2980b9; /* fallback for old browsers */
  background: linear-gradient(to right,#82c9f8,#6dd5fa,#03c2ee);
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.07);
`;
