import React from 'react';

import { Modal } from '../ui/Modal/Modal';
import {
  Amount,
  AmountsContainer
} from './TipModal.styles';

interface TipModalProps {
  onTipSelected: (value: number) => void;
  setShowTipModal: (value: boolean) => void;
}

export const TipModal: React.FC<TipModalProps> = ({ onTipSelected, setShowTipModal }) => {
  const amounts: number[] = [0.0002, 0.005, 0.010];
  return (
    <Modal
      title="Select Amount"
      onClose={() => setShowTipModal(false)}
    >
      <AmountsContainer>
        {
          amounts.map((amount, idx) => (
            <Amount 
              key={amount + idx} 
              onClick={() => onTipSelected(amount)}
            >
              {amount}
              <span>eth</span>
            </Amount>
          ))
        }
      </AmountsContainer>
    </Modal>
  );
}
