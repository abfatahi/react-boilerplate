import React from 'react';
import styled, { css } from 'styled-components';
import { DotsLoadingAnimation } from './index';
// import { ArrowRight } from "../assets/icons/navbar";
// import { MdFileDownload } from "react-icons/md";

const Button = (props) => {
  return (
    <Container
      width={props.full ? props.full : undefined}
      height={props.large ? props.large : undefined}
      primary={props.primary}
      onClick={props.onClick}
      disabled={props.disabled ? true : false}
      className={props.className}
      capitalize={props.capitalize}
    >
      {props.loading ? <DotsLoadingAnimation /> : props.text}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  position: relative;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'calc(2.5em + 1vmin)')};
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: calc(1rem + 0.1vmin);
  padding: 0 20px;
  line-height: 120%;
  letter-spacing: 0.05em;
  cursor: pointer;

  ${(props) => css`
    ${props.primary &&
    css`
      background: var(--primary-color);
      color: #fff;
    `}
  `}

  .icon {
    width: 14px;
    height: 9px;
  }

  .download {
    width: 18px;
    height: 18px;
  }

  :hover {
    opacity: 0.8;
  }

  :focus {
    outline: none;
  }

  .spinner {
    margin: 0px auto 0;
    width: 70px;
    text-align: center;
  }

  .spinner > div {
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner > .blue {
    width: 15px;
    height: 15px;
    background-color: #ffffff !important;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
