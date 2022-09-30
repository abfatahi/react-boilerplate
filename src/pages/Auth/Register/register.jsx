import React from 'react';
import styled from 'styled-components';
import { AppAssets, AppRoutes } from '../../../constants';
import AuthLayout from '../../../layout/AuthLayout';
import { Button, Inputfield } from '../../../reusables';

const RegisterFormComp = () => {
  return (
    <AuthLayout
      primary={true}
      content={
        <FormCard>
          <img className="logo" src={AppAssets.logo} alt="Logo" />
          <h2>Create Your Account</h2>
          <Inputfield name="business_name" placeholder="Business Name" />
          <div className="col_group">
            <Inputfield name="first_name" placeholder="First Name" />
            <Inputfield name="last_name" placeholder="Last Name" />
          </div>
          <Inputfield name="Email" placeholder="Email" />
          <Inputfield name="Password" placeholder="Password" type="password" />
          <label className="goto" htmlFor="terms">
            <input type="checkbox" name="terms" id="terms" />
            &nbsp;&nbsp;I accept PayChangu’s&nbsp;
            <a className="link_text" href={AppRoutes.register}>
              Terms & condition
            </a>
            &nbsp; and&nbsp;
            <a className="link_text" href={AppRoutes.register}>
              privacy policy
            </a>
          </label>
          <br />
          <Button primary={true} text="Get Started" />
          <br />
          <div className="goto center">
            Have an account already?{' '}
            <a className="link_text" href={AppRoutes.login}>
              Sign Up
            </a>
          </div>
        </FormCard>
      }
    />
  );
};

export default RegisterFormComp;

const FormCard = styled.form`
  border-radius: 25px;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .col_group {
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 425px) {
      flex-direction: column;
    }
  }

  .logo {
    display: none;
  }

  @media screen and (max-width: 820px) {
    max-width: 100%;
    padding: 2rem;
  }

  @media screen and (max-width: 425px) {
    padding: 2rem 1rem;

    .logo {
      display: block;
    }
  }

  .link_text {
    text-align: right;
    font-style: italic;
    font-weight: 200;
    font-size: 14px;
    line-height: 120%;
    text-decoration: none;
    color: #18a1a5 !important;
  }

  .goto {
    color: var(--secondary-text-color);
    font-size: 14px;
    text-align: center;
  }
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 200px;
    height: 50px;
    object-fit: contain;
    margin: 0 auto;

    @media screen and (max-width: 425px) {
      width: 150px;
      height: 40px;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: calc(1.5em + 1vmin);
    line-height: 120%;
    text-transform: capitalize;
    color: var(--secondary-text-color);
    margin: 0 auto 1rem !important;
  }
`;
