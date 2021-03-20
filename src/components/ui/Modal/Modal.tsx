import * as React from 'react';

import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  IconClose
} from './Modal.styles';
import {ModalProps} from "./Modal.types";

export const Modal: React.FunctionComponent<ModalProps> = (props) => {
  return (
    <ModalContainer>
      <ModalBox>
        <IconClose onClick={props.onClose}>×</IconClose>
        <ModalTitle>{props.title}</ModalTitle>
        {props.children}
      </ModalBox>
    </ModalContainer>
  );
};

