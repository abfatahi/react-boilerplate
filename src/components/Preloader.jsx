/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { AppAssets } from '../constants';

const Preloader = () => {
  return (
    <Container>
      <img src={AppAssets.logo} alt="Logo" />
      <h4>Loading...</h4>
    </Container>
  );
};

export default Preloader;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 40px;
    width: 150px;
    object-fit: contain;
  }

  h4 {
    color: #3333339a;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }
`;
