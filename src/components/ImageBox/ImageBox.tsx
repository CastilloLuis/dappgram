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
  setShowTipModal: (value: boolean) => void;
}

export const ImageBox: React.FC<ImageBoxProps> = ({ imageHash, description, setShowTipModal }) => {
  return (
    <ImageBoxContainer>
      <ImageBoxWrapper>
        <img loading="lazy" src={getIpfsImage(imageHash)} alt={imageHash} />
        <span onClick={() => setShowTipModal(true)}>
          💸
        </span>
      </ImageBoxWrapper>
      <DescriptionBox>
        { description }
      </DescriptionBox>
    </ImageBoxContainer>
  )
}
