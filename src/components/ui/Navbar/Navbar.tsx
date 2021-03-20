import React from 'react';
import { NavbarContainer } from './Navbar.styles';
import DAppLogo from '../../../assets/dapp.png';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavbarContainer>
      <img src={DAppLogo} alt="DAppGram" />
      <span>DAppGram</span>
    </NavbarContainer>
  )
}