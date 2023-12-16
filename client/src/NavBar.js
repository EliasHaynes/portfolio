import React,{useState, useRef, useEffect} from "react";
import styled from "styled-components";
import { bool, func } from 'prop-types';
import {ThemeProvider} from "styled-components"


function NavBar() {


const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (

      <>
        <div ref={node}>

            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />

        </div>
        <div>
        </div>
        
      </>

  );
}


const Menu = ({ open, ...props }) => {
  
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
  
    return (
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">💁🏻‍♂️</span>
          About us
        </a>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">💸</span>
          Pricing
          </a>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">📩</span>
          Contact
          </a>
      </StyledMenu>
    )
  }
  
  Menu.propTypes = {
    open: bool.isRequired,
  }

  const Burger = ({ open, setOpen, ...props }) => {
  
    const isExpanded = open ? true : false;
    
    return (
      <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
        <span />
        <span />
        <span />
      </StyledBurger>
    )
  }
  
  Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
  
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };


const Container = styled.nav`

`

const BurgerMenu = styled.div`


    @media (max-width:768px) {

    }
`;

const NameTag = styled.div`

`;

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? "red" : "green"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export default NavBar;