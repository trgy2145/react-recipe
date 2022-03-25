import React,{useState} from 'react'
import { Nav,Logo,Hamburger,MenuLink,Menu } from './NavbarStyles'

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    return (
      <Nav>
        <Logo to="/">
          <i>{"<TRGY2145>"}</i>
          <span>recipe</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu isOpen={isOpen}>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to={{ pathname: "https://github.com/trgy2145" }}>
           GITHUB
          </MenuLink>
          <MenuLink to="/login">Logout</MenuLink>
        </Menu>
      </Nav>
    );
}

export default Navbar
