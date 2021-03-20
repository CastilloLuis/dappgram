import React from 'react';

import { getIpfsImage } from '../../utils';

import {
  ImageBoxContainer,
  ImageBoxWrapper,
  DescriptionBox
} from './ImageBox.styles';

interface ImageBoxProps {
  imageHash: string;
  description: string;
  tip: string;
  isAuthor: boolean;
  setShowTipModal: () => void;
}

export const ImageBox: React.FC<ImageBoxProps> = ({
  imageHash,
  description,
  tip,
  isAuthor,
  setShowTipModal
}) => {
  return (
    <ImageBoxContainer>
      <ImageBoxWrapper>
        <img loading="lazy" src={getIpfsImage(imageHash)} alt={imageHash} />
        {
          !isAuthor && (
            <span onClick={() => setShowTipModal()}>
              💸
            </span>
          )
        }
      </ImageBoxWrapper>
      <DescriptionBox>
        { description }<br/>
        <hr />
        Total Collected: {window.web3.utils.fromWei(tip, 'ether')} eth
      </DescriptionBox>
    </ImageBoxContainer>
  )
}
