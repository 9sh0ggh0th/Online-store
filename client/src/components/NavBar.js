import React, { useContext } from "react";
import { Context } from "..";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const navigate = useNavigate()
  const { user } = useContext(Context)

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    navigate(LOGIN_ROUTE)
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Buy Device</NavLink>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={BASKET_ROUTE}>Basket</NavLink>

        {user.isAuth ?
          <Nav className="ml-auto" style={{ color: 'white' }}>

            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
              className="mr-4">
              Admin panel
            </Button>

            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
            >
              Exit
            </Button>

          </Nav>
          :
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>LogIn/SignIn</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;