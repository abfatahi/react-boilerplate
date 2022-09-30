/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import { BsEye, BsEyeSlashFill } from 'react-icons/bs';

const Container = styled.div`
  position: relative;
  width: 100%;
  // min-width:320px;

  .group {
    display: flex;
    align-items: center;
    position: relative;
    // height: 57px;

    label {
      position: absolute;
      top: 10px;
      left: 15px;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
      text-transform: uppercase;
      color: #172836;

      span {
        color: #f14c18;
        font-size: 12px;
      }
    }

    textarea {
      border: none;
      padding: 1.8em 15px 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 1em;
      letter-spacing: 0.018em;
      color: #333;
      width: 100%;
      background: #f1f0ef;

      :focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }
    }
  }
`;
const Index = (props) => {
  return (
    <Container>
      <div className="group">
        <label>
          {props.label}
          <span> *</span>
        </label>
        <textarea
          name={props.fieldname}
          placeholder={props.placeholder}
          onChange={props.onTextChange}
          rows={10}
        />
      </div>
    </Container>
  );
};

export default Index;
