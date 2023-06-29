import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { grey } from '@mui/material/colors';

interface AddButtonProps {
  children: ReactNode;
  onClick : Function
}

const AddButton: React.FC<AddButtonProps> = ({ children, onClick }) => {
  const addButtonStyle: React.CSSProperties = {
    border: '1px solid #696969',
    color: '#696969',
    padding: '5px',
    height: '35px',
    width: '80px',
    marginLeft: '20px',
    marginRight: '20px'
  };

  const textStyle: React.CSSProperties = {
    marginRight: '3px',
    marginLeft: '5px',
    fontSize: '16px',

  };

  return (
    <Button variant="outlined" style={addButtonStyle}>
      <h3 style={textStyle}>追加</h3> 
      <AddIcon sx={{ color: grey[500], size: 'small' }} />
    </Button>
  );
};

export default AddButton;
