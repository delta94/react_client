import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from 'images/header-logo.png';
import Search from 'components/Search';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import defaultAvatar from 'images/default-avatar.png';
import UserMenu from './menu';
import isEmpty from 'lodash/isEmpty';
import reactLocalStorage from 'utils/localStorage';
import { toast } from 'react-toastify';
import * as Messages from 'constants/messages';

export const logOut = () => {
  reactLocalStorage.clear();
  toast(Messages.logoutSuccess);
};

function Header() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const userAccount = reactLocalStorage.getObject('user-account');
    if (isEmpty(userAccount)) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, []);

  return (
    <header id="diamond-header">
      <Navbar expand="sm" className="align-items-center">
        <Navbar.Brand href="/">
          <img src={Logo} alt="Diadmon Stay" />
        </Navbar.Brand>
        <Search />
        <Navbar.Toggle aria-controls="navbar-menu" />
        <Navbar.Collapse id="navbar-menu">
          {
            auth ?
              <>
                <Dropdown overlay={UserMenu}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <div className="user-info">
                      <div className="user-avatar" style={{ backgroundImage: `url(${defaultAvatar})` }} />
                      <div className="user-name">Linh Yo</div>
                    </div>
                    <DownOutlined />
                  </a>
                </Dropdown>
              </> :
              <>
                <Nav>
                  <Nav.Item>
                    <NavLink exact activeClassName="active" to="/register" className="nav-link">Đăng ký</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink exact activeClassName="active" to="/login" className="nav-link">Đăng nhập</NavLink>
                  </Nav.Item>
                </Nav>
              </>
          }
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
