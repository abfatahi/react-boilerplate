/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { sidebarSelector, toggleSidebar } from '../../redux/reducers/sidebar';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = (props) => {
  // const { sidebarActive } = useSelector(sidebarSelector);
  // const dispatch = useDispatch();
  const { children } = props;
  const handleToggleSidebar = () => {
    // dispatch(toggleSidebar());
  };
  return (
    <Container>
      <Navbar toggleSidebar={handleToggleSidebar} />
      <Sidebar
        // showSidebar={sidebarActive}
        toggleSidebar={handleToggleSidebar}
      />
      <Content>{children}</Content>
    </Container>
  );
};

export default DashboardLayout;

const Container = styled.div``;
