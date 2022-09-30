import React from 'react';
import styled from 'styled-components';
import { AppAssets, AppRoutes } from '../../../constants';
import AuthLayout from '../../../layout/AuthLayout';
import { Button, Inputfield } from '../../../reusables';

const ForgotPasswordComp = () => {
  return (
    <AuthLayout
      primary={false}
      content={
        <AuthFormCard>
          <img src={AppAssets.logo} alt="Logo" />
          <h2>Forgot Your Password? 🤦🏽‍♂️</h2>
          <p>
            Don't worry! It happens to everyone. <br />
            <span>
              Enter your registered email and we will send you instructions to reset your password
            </span>
          </p>
          <br />
          <Inputfield name="email" placeholder="Email" />
          <br />
          <Button primary={true} text="Continue" />
          <br />
          <br />
          <div className="goto">
            <a className="link_text" href={AppRoutes.login}>
              Return to Login
            </a>
          </div>
        </AuthFormCard>
      }
    />
  );
};

export default ForgotPasswordComp;

const AuthFormCard = styled.form`
  background: var(--primary-text-color);
  width: 600px;
  border-radius: 25px;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    width: 90vw;
    padding: 2rem;
  }

  @media screen and (max-width: 425px) {
    padding: 2rem 1rem;
  }

  p {
    font-size: calc(0.4rem + 1.5vmin);
    text-align: center;
    line-height: 150%;
    color: var(--secondary-text-color);

    span {
      font-size: calc(0.25rem + 1.5vmin);
    }
  }

  .link_text {
    text-align: right;
    font-style: italic;
    font-weight: 200;
    font-size: 18px;
    line-height: 120%;
    text-decoration: none;
    color: #18a1a5 !important;

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }

  .goto {
    text-align: center;
    color: var(--secondary-text-color);

    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }

  img {
    width: 200px;
    height: 50px;
    object-fit: contain;
    margin: 0 auto 40px;

    @media screen and (max-width: 425px) {
      width: 150px;
      height: 40px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
    text-align: center;
    text-transform: capitalize;
    color: var(--secondary-text-color);
    margin: 0 auto 1.5rem !important;

    @media screen and (max-width: 425px) {
      font-size: 24px;
    }
  }
`;
