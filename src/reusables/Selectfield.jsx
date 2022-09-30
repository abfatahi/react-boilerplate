import React from 'react';
import styled from 'styled-components';

const Selectfield = (props) => {
  return (
    <Container>
      <div className="group">
        {/* {props.label ? (
          <label>
            {props.label}
            <span> *</span>
          </label>
        ) : (
          ""
        )} */}
        <select
          className={props?.className}
          name={props?.name}
          id={props?.id}
          placeholder={props?.placeholder}
        >
          {props?.data?.map((item) => {
            return (
              <option key={item?.key} value={item?.value}>
                {item?.value}
              </option>
            );
          })}
        </select>
      </div>
    </Container>
  );
};

export default Selectfield;

const Container = styled.div`
  position: relative;
  width: 100%;

  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: ${({ height }) => (height ? height : 'calc(2.5em + 1vmin)')};

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

    select {
      width: 100%;
      background: #f1f0ef;
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

      -webkit-appearance: none;
      appearance: none;

      :focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }
    }
  }

  .group::after {
    content: '▼';
    font-size: 1rem;
    right: 15px;
    position: absolute;

    @media screen and (max-width: 425px) {
      top: 16px;
    }
  }
`;
