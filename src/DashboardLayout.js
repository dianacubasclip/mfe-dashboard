import styled from 'styled-components';
import React from 'react';
import CentralComponent from './CentralComponent';

const StyledTopComponent = styled.div`
margin-top: 20px;
  background-color: lightblue;
  width: 90%;
  border-radius: 10px;
  height: 175px;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledRightContainer = styled.div`
  display: flex;
  width: 80%;
  height: 450px;
  background-color: lightpink;
  border-radius: 10px;
`;

const StyledLeftContainer = styled.div`
  width: 18%;
`;

const StyledLeftComponent = styled.div`
  background-color: lightgray;
  height: 75px;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DashboardLayout = () => {
  return (
    <StyledContainer>
      <StyledTopComponent>usgusg</StyledTopComponent>
      <StyledBottomContainer>
        <StyledRightContainer>
          <CentralComponent />
        </StyledRightContainer>
        <StyledLeftContainer>
          <StyledLeftComponent />
          <StyledLeftComponent />
          <StyledLeftComponent />
          <StyledLeftComponent />
        </StyledLeftContainer>
      </StyledBottomContainer>
    </StyledContainer>
  )
}

export default DashboardLayout;