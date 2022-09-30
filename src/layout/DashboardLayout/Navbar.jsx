import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Navbar = ({ toggleSidebar }) => {
  const activeTab = sessionStorage.getItem('tab');
  // const dispatch = useDispatch();
  // const Navigate = useNavigate();

  // const signout = () => {
  //   sessionStorage.clear();
  //   // history.push(AppRoutes.login);
  // };

  // const logOut = async () => {
  //   signout();
  // };

  return (
    <Container>
      <h2>{activeTab}</h2>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: fixed;
  left: 250px;
  height: 64px;
  width: calc(100vw - 250px);
  background: #fbf9fe 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  z-index: 999;

  @media screen and (max-width: 450px) {
    width: 100vw;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0;
    padding: 0 1rem;
  }
  h2 {
    font-weight: 600;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.005em;
    color: #0000009a;
  }
`;

// const LogoutIcon = styled(LogoutSolid)`
//   margin-right: 1.5rem;
//   width: 3.5rem;
//   height: 3.5rem;
//   cursor: pointer;

//   :hover {
//     transform: scale(1.1);
//     transition: 0.2s all ease-in-out;
//   }

//   @media screen and (max-width: 450px) {
//     display: none;
//   }
// `;

// const NotificationIcon = styled(Notifications)`
//   margin-right: 1.5rem;
//   width: 3.5rem;
//   height: 3.5rem;
//   cursor: pointer;

//   :hover {
//     transform: scale(1.1);
//     transition: 0.2s all ease-in-out;
//   }

//   @media screen and (max-width: 450px) {
//     display: none;
//   }
// `;

// const Menu = styled(Hamburger)`
//   cursor: pointer;
//   color: #6149cd;
//   width: 20px;
//   height: 20px;

//   :hover {
//     transform: scale(1.1);
//   }

//   @media screen and (max-width: 450px) {
//     width: 16px;
//     height: 16px;
//   }

//   @media screen and (min-width: 450px) {
//     display: none;
//   }
// `;

// const Avatar = styled.img`
//   margin-right: 0.5rem;
//   width: 40px;
//   height: 40px;
//   cursor: pointer;
// `;

// const ArrowDown = styled(ChevronDown)`
//   cursor: pointer;
//   width: 1rem;
//   height: 1rem;
//   :hover {
//     transform: scale(1.1);
//     transition: 0.2s all ease-in-out;
//   }
// `;
