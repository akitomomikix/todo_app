import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

interface WhiteButtonProps {
  title: string;
  children: ReactNode;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ title, children }) => {
  const whiteButtonStyle: React.CSSProperties = {
    border: '1px solid #696969',
    color: '#696969',
    padding: '5px',
  };
  return (
    <Button variant="outlined" style={whiteButtonStyle}>
      {title}
    </Button>
  );
};

export default WhiteButton;

