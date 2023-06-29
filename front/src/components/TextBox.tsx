import * as React from 'react';
import TextField from '@mui/material/TextField';

interface TextBoxProps {
  style?: React.CSSProperties;
}

interface TextBoxProps {
  row: number;
}

const TextBox: React.FC<TextBoxProps> = ({ style, row }) => {
  return (
      <TextField id="outlined-basic" variant="outlined" multiline rows={row} style={style} />
  );
};

export default TextBox;

