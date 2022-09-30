/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';

const Container = styled.div`
  position: relative;
  width: 100%;
  // min-width:320px;

  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: ${({ height }) => (height ? height : 'calc(2.5em + 1vmin)')};

    .icon {
      position: absolute;
      right: 0;
      transform: translateX(-50%);
      cursor: pointer;
      font-weight: 500;
      font-size: 1.2rem;
      color: #939598;
    }

    input {
      border: none;
      padding: 0.5rem 1rem;
      height: 100%;
      border-radius: 10px;
      font-style: normal;
      font-weight: 200;
      font-size: 1em;
      letter-spacing: 0.018em;
      color: #333;
      width: 100%;
      background: #f7f7f7;
      border: 1px solid #e5e5e5;

      :focus {
        outline: none;
        background: transparent;
        border: 0.5px solid var(--primary-color);
        box-shadow: 0 0 3px var(--primary-color);
      }
    }
  }
`;
const Index = (props) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Container>
      <div className="group">
        {props?.type === 'password' && togglePassword && (
          <BsEyeSlashFill
            className="icon"
            onClick={() => {
              setTogglePassword(!togglePassword);
            }}
          />
        )}
        {props?.type === 'password' && !togglePassword && (
          <BsEye
            className="icon"
            onClick={() => {
              setTogglePassword(!togglePassword);
            }}
          />
        )}

        {props?.type === 'password' ? (
          <input
            name={props?.name}
            type={!togglePassword ? 'password' : 'text'}
            placeholder={props?.placeholder}
            onChange={props?.onChange}
          />
        ) : (
          <input
            name={props?.name}
            type={props?.type}
            placeholder={props?.placeholder}
            onChange={props?.onChange}
          />
        )}
      </div>
    </Container>
  );
};

export default Index;
