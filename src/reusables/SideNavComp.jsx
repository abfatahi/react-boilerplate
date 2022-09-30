import React from 'react';
import styled from 'styled-components';
import { BrCallIcon, BrChevronLeft, BrMail, BrWhatsappIcon } from '../assets/icons';

const SideNavComp = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      {!show && (
        <div
          data-aos="fade-left"
          data-aos-duration="2200"
          onClick={() => setShow(!show)}
          className="toggle_btn"
        >
          <BrChevronLeft />
        </div>
      )}
      {show && (
        <>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            onClick={() => setShow(!show)}
            className="toggle_btn"
          >
            <BrChevronLeft className="rotate" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="cta_container">
            <a href="tel:+23407002749366673">
              <BrCallIcon className="icon" />
            </a>
            <a href="mailto:info@brixenmore.com" target="_blank" rel="noreferrer">
              <BrMail className="icon" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=2349093496941&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <BrWhatsappIcon className="icon" />
            </a>
          </div>
        </>
      )}
    </Container>
  );
};

export default SideNavComp;

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  height: auto;
  z-index: 3987398;

  .toggle_btn {
    padding: 24px 7px 24px 9px;
    background: #0d0d0d;
    border-radius: 16px 0 0 16px;
    cursor: pointer;

    .rotate {
      transform: matrix(-1, 0, 0, 1, 0, 0);
      color: #fcd7ad;
      font-size: 243px;
    }

    // @media screen and (max-width: 425px) {
    //   width: 32px;
    //   height: 72px;
    // }

    :hover {
      opacity: 0.7;
    }
  }

  .cta_container {
    position: relative;
    padding: 2.5rem 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    background: #0d0d0d;
    border-radius: 16px 0 0 16px;

    @media screen and (max-width: 425px) {
      padding: 1rem;
    }

    .icon {
      color: #fcd7ad;
      font-size: 1.5rem;
      cursor: pointer;

      @media screen and (max-width: 425px) {
        font-size: 1.3rem;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
