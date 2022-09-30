import React from 'react';
import styled from 'styled-components';
import { AppAssets } from '../constants';

function AuthLayout() {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <LeftFrame>
        <div className="top_layer">
          <img src={AppAssets.logo} alt="Logo" />
          <div className="text_group">
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
            </p>
          </div>
          <div className="text_group">
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
            </p>
          </div>
          <div className="text_group">
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
            </p>
          </div>
        </div>
        <div className="bottom_layer">
          <span>&copy; PayChangu {currentYear}</span>
        </div>
      </LeftFrame>
      <RightFrame />
    </Container>
  );
}

export default AuthLayout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1.5fr 2fr;
  }

  @media screen and (max-width: 425px) {
    position: relative;
    grid-template-columns: 1fr;
  }
`;

const LeftFrame = styled.div`
  height: 100vh;
  position: relative;
  background: #18a1a52a;
  padding: 48px 80px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1280px) {
    padding: 48px 32px 32px;
  }

  .bottom_layer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color);
  }

  .top_layer {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .text_group {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      h4 {
        color: var(--secondary-text-color);
        font-size: 1.25rem;
        line-height: 120%;
      }
      p {
        color: var(--secondary-text-color);
        opacity: 0.7;
        max-width: 350px;
        line-height: 150%;
        font-weight: 300;
      }
    }
  }

  img {
    width: 150px;
    height: 42px;
    object-fit: contain;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const RightFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackToSignup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: #6149cd;
  cursor: pointer;
`;
