import React from 'react';

import { NavbarContainer, ImageContainer, Label } from './Navbar.styles';
import DAppLogo from '../../../assets/dapp.png';

interface NavbarProps {
  account: string;
  balance: number;
}

export const Navbar: React.FC<NavbarProps> = ({ account, balance }) => {
  return (
    <NavbarContainer>
      <div>
        <img src={DAppLogo} alt="DAppGram" />
        <span>DAppGram</span>
      </div>

      <ImageContainer>
        <Label>
          {account} - <span>{balance&&window?.web3?.utils?.fromWei(`${balance}`.toString(), 'ether')} eth</span>
        </Label>
        <img src={`https://www.gravatar.com/avatar/${account}?s=${String(
          Math.max(200, 200),
        )}`} />
      </ImageContainer>
    </NavbarContainer>
  )
}