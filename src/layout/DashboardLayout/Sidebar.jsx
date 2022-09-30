/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Link
  // useNavigate
} from 'react-router-dom';
// import { useDispatch } from "react-redux";
import styled from 'styled-components';
import {
  FaHome,
  FaHotjar,
  FaChevronDown,
  FaCommentDots,
  FaCreditCard,
  FaCode,
  FaTags,
  FaCog,
  FaGavel
} from 'react-icons/fa';
import { AppAssets, AppRoutes } from '../../constants';

const Index = (props) => {
  const { toggleSidebar, showSidebar } = props;
  // const Navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('Dashboard');
  const active = sessionStorage.getItem('tab');

  React.useEffect(() => {
    setActiveTab(active);
  }, [active]);

  // const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  // const dispatch = useDispatch();
  const handleTabClick = (value) => {
    sessionStorage.setItem('tab', value);
    toggleSidebar();
  };

  // const logout = () => {
  //   sessionStorage.clear();
  //   // dispatch(clearState());
  //   Navigate("/login");
  // };
  return (
    <Container showSidebar={showSidebar}>
      <div className="header_group">
        <img src={AppAssets.logo} alt="Logo-short" />
        <ProfileGroup>
          <div className="info_group">
            <div className="avatar">A</div>
            <div className="text_group">
              <h3>Abfat Inc</h3>
              <p>Ishaq Abdulfatahi</p>
            </div>
          </div>
          <FaChevronDown className="icon" />
        </ProfileGroup>
      </div>
      <div className="menu_group">
        {sidebarTabs.slice(0, 3).map((tab) => {
          const { id, name, icon, link } = tab;
          return (
            <SidebarTabs
              key={id}
              onClick={() => handleTabClick(name)}
              className={activeTab === name ? 'active' : ''}
              to={link}>
              <div className="icon">{icon}</div>
              <p>{name}</p>
            </SidebarTabs>
          );
        })}
      </div>
      <div className="menu_group">
        <h4>Payment Tools</h4>
        {sidebarTabs.slice(3, 5).map((tab) => {
          const { id, name, icon, link } = tab;
          return (
            <SidebarTabs
              key={id}
              onClick={() => handleTabClick(name)}
              className={activeTab === name ? 'active' : ''}
              to={link}>
              <div className="icon">{icon}</div>
              <p>{name}</p>
            </SidebarTabs>
          );
        })}
      </div>
      <div className="menu_group">
        <h4>Profile & Support</h4>
        {sidebarTabs.slice(5, 7).map((tab) => {
          const { id, name, icon, link } = tab;
          return (
            <SidebarTabs
              key={id}
              onClick={() => handleTabClick(name)}
              className={activeTab === name ? 'active' : ''}
              to={link}>
              <div className="icon">{icon}</div>
              <p>{name}</p>
            </SidebarTabs>
          );
        })}
      </div>
      <div className="bottom_menu">
        <hr />
        {sidebarTabs.slice(-1).map((tab) => {
          const { id, name, icon, link } = tab;
          return (
            <SidebarTabs
              key={id}
              onClick={() => handleTabClick(name)}
              className={activeTab === name ? 'active' : ''}
              to={link}>
              <div className="icon">{icon}</div>
              <p>{name}</p>
            </SidebarTabs>
          );
        })}
      </div>
      <div className="overlay" onClick={toggleSidebar} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: #18a1a51a;
  display: flex;
  flex-direction: column;
  z-index: ${({ showSidebar }) => (showSidebar ? 9000 : 0)};

  .header_group {
    padding: 1rem 1rem 0 1rem;
  }

  @media screen and (max-width: 768px) {
    display: ${({ showSidebar }) => (showSidebar ? 'block' : 'none')};

    .overlay {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: calc(100vw - 250px);
      background: linear-gradient(
        99.11deg,
        rgba(49, 66, 79, 0.71) 0.83%,
        rgba(10, 11, 12, 0.64) 100%
      );
      z-index: 19;
      display: none;

      @media screen and (max-width: 1024px) {
        display: ${({ showSidebar }) => (showSidebar ? 'block' : 'none')};
      }
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
  }

  .menu_group {
    margin-bottom: 1rem;
    h4 {
      font-size: 1rem;
      margin: 0 0 0.5rem 2rem !important;
      color: var(--primary-color);
      font-weight: 300;
    }
  }

  .bottom_menu {
    position: absolute;
    bottom: 1rem;
  }

  img {
    width: 120px;
    height: 40px;
    object-fit: contain;
  }

  .active {
    background: var(--primary-color);
    opacity: 1;

    p,
    .icon {
      color: #fff;
      font-weight: 600;
    }

    :hover {
      opacity: 0.7;
    }
  }

  .user {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
    margin-bottom: 3rem;

    .icon {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
`;

// const Avatar = styled.img`
//   margin: 0 !important;
//   border-radius: 25%;
//   width: 40px !important;
//   height: 40px !important;
//   cursor: pointer;
// `;

const ProfileGroup = styled.div`
  background: var(--primary-color);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 2rem;
  padding: 0.75em;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  .icon {
    font-size: 1rem;
    color: var(--primary-text-color);
  }

  .info_group {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .avatar {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      background: #fff;
      font-size: 24px;
      color: var(--primary-color);
    }

    h3,
    p {
      color: var(--primary-text-color);
    }
    p {
      font-weight: 200;
      font-size: 13px;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0.27em !important;
    }
  }
`;

const SidebarTabs = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.3rem 0 0.3rem 2rem;
  cursor: pointer;
  text-decoration: none;
  margin: 0.25em 0;

  .icon {
    font-size: 18px;
    color: var(--primary-color);
    margin-right: 1rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: var(--primary-color);
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
  }
`;

const sidebarTabs = [
  {
    id: 1,
    name: 'Dashboard',
    icon: <FaHome />,
    link: AppRoutes.dashboard
  },
  {
    id: 2,
    name: 'Transactions',
    icon: <FaTags />
    // link: AppRoutes.transactions,
  },
  {
    id: 3,
    name: 'Chargebacks',
    icon: <FaGavel />
    // link: AppRoutes.chargebacks,
  },
  {
    id: 4,
    name: 'Payment Links',
    icon: <FaHotjar />
    // link: AppRoutes.paymentLinks,
  },
  {
    id: 5,
    name: 'Cards',
    icon: <FaCreditCard />
    // link: AppRoutes.cards,
  },
  {
    id: 6,
    name: 'Settings',
    icon: <FaCog />
    // link: AppRoutes.settings,
  },
  {
    id: 7,
    name: 'Customer Support',
    icon: <FaCommentDots />
    // link: AppRoutes.support,
  },
  {
    id: 8,
    name: 'View Docs',
    icon: <FaCode />
    // link: AppRoutes.support,
  }
];
