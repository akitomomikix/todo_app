import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import BlackButton from '/Users/sotamizukami/todo_app/front/src/components/BlackButton';

interface TodoTextBoxProps {
  content: string;
}

const TodoTextBox: React.FC<TodoTextBoxProps> = (props) => {
  return (
    <div>
      <Stack
        direction="row"
        spacing={3}
        p={2}
        sx={{
          width: 1000,
          height: 30,
          outlineColor: 'gray',
          border: '2px solid gray',
          borderRadius: '10px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography>{props.content}</Typography>
        <Box sx={{ marginLeft: 'auto', marginRight: '10px' }}>
          <BlackButton title="削除" />
        </Box>
      </Stack>
    </div>
  );
};

export default TodoTextBox;
