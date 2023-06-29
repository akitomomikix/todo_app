import React from 'react';
import Button from '@mui/material/Button';

interface BlackButtonProps {
  title: string;
}

const BlackButton: React.FC<BlackButtonProps> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'black',
        width: '100px',
        height: '40px',
      }}
    >
      {props.title}
    </Button>
  );
};

export default BlackButton;
