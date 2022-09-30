/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Index = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Index;

const Container = styled.div`
  position: relative;
  top: 64px;
  left: 250px;
  width: calc(100% - 250px);
  height: -webkit-calc(100% - 64px);
  height: -moz-calc(100% - 64px);
  min-height: calc(100vh - 64px);
  background: #f3f2f7;
  border-left: 3px solid #fbf9fe;
  padding: 1.5rem;
  //   color: #666666;
  //   overflow-x: hidden !important;

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

// export const BackArrow = styled(ChevronLeft)`
//   cursor: pointer;

//   :hover {
//     transform: scale(1.05);
//   }
// `;
