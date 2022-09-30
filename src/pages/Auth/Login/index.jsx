import React from 'react';
import styled from 'styled-components';
import { AppAssets, AppRoutes } from '../../../constants';
import AuthLayout from '../../../layout/AuthLayout';
import { Button, Inputfield } from '../../../reusables';

const LoginComp = () => {
  return (
    <AuthLayout
      primary={false}
      content={
        <AuthFormCard>
          <img src={AppAssets.logo} alt="Logo" />
          <h2>Sign In</h2>
          <Inputfield name="email" placeholder="Email" />
          <br />
          <Inputfield name="password" placeholder="Password" type="password" />
          <br />
          <a className="link_text" href={AppRoutes.forgotPassword}>
            forgot password?
          </a>
          <br />
          <br />
          <Button primary text="Sign In" />
          <br />
          <br />
          <div className="goto">
            Don’t have an account?{' '}
            <a className="link_text" href={AppRoutes.register}>
              Sign up
            </a>
          </div>
        </AuthFormCard>
      }
    />
  );
};

export default LoginComp;

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
    text-transform: capitalize;
    color: var(--secondary-text-color);
    margin: 0 auto 1.5rem !important;

    @media screen and (max-width: 425px) {
      font-size: 24px;
    }
  }
`;
