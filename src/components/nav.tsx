import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import MenuIcon from 'react-feather/dist/icons/menu';
import FacebookIcon from 'react-feather/dist/icons/facebook';
import TwitterIcon from 'react-feather/dist/icons/twitter';
import InstagramIcon from 'react-feather/dist/icons/instagram';
import YoutubeIcon from 'react-feather/dist/icons/youtube';
import ShoppingIcon from 'react-feather/dist/icons/shopping-cart';

import Drawer from 'rc-drawer';
import '../../node_modules/rc-drawer/assets/index.css';

import logo from '../images/logo.png';

export default () => {
  const [open, changeOpne] = useState(false);

  return (
    <AppBar>
      <Link to="/">
        <Logo>
          <img src={logo} alt="宜野湾 Human Stage" />
        </Logo>
      </Link>
      <Menu>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Menu>
      <Sns>
        <li>
          <a href="https://www.facebook.com/ginowanhumanstage/" target="_blank">
            <FacebookIcon size={20} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/HumanStage" target="_blank">
            <TwitterIcon size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ginowanhumanstage/"
            target="_blank"
          >
            <InstagramIcon size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCkGHTZ4duRmOcwclouDiDKg"
            target="_blank"
          >
            <YoutubeIcon size={20} />
          </a>
        </li>
        <li>
          <a href="https://humanstage.thebase.in/" target="_blank">
            <ShoppingIcon size={20} />
          </a>
        </li>
      </Sns>
      <MenuBtn onClick={() => changeOpne(!open)}>
        <MenuIcon />
      </MenuBtn>
      <Drawer
        width="250px"
        handler={false}
        open={open}
        onClose={() => changeOpne(false)}
        placement="right"
      >
        <DrawerManu>
          <li>
            <Link to="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </DrawerManu>
      </Drawer>
    </AppBar>
  );
};

const AppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  border-top: 5px solid #5897df;
  border-bottom: 1px solid #ddd;
  height: 95px;
  box-sizing: border-box;
  padding: 0;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    padding: 0 0.5rem;
    height: 155px;
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
`;

const Logo = styled.h1`
  width: 120px;
  margin: 0;
  line-height: 0;
  padding: 0.75rem 1rem;
  will-change: transform;

  img {
    width: 100%;

    &:hover {
      opacity: 0.75;
    }
  }

  @keyframes buzz {
    50% {
      transform: translateX(3px) rotate(2deg);
    }
    100% {
      transform: translateX(-3px) rotate(-2deg);
    }
  }

  @media (min-width: 768px) {
    width: 240px;
    padding: 1em;
    margin-right: 1rem;

    &:hover {
      animation-name: buzz;
      animation-duration: 10ms;
      animation-timing-function: linear;
      animation-iteration-count: 50;
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: none;
  padding: 0;
  margin-bottom: -5px;

  li {
    display: inline-block;

    &:not(:first-child) {
      margin-left: 2.5em;
    }

    a {
      font-size: 1rem;
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const Sns = styled.ul`
  list-style: none;
  display: none;
  padding: 0 2em 0 0;
  margin-left: auto;

  li {
    display: inline-block;

    &:not(:first-child) {
      margin-left: 2em;
    }

    a {
      color: inherit;
      display: block;
    }
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuBtn = styled.a`
  line-height: 0;
  color: #000;
  padding: 1em;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DrawerManu = styled.ul`
  list-style: none;
  padding: 0;
  li {
    a {
      color: #1a1a1a;
      text-decoration: none;
      display: block;
      padding: 0.75em 1.25em;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
