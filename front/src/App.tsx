import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';


function App() {
  return (
    <div>
      <Stack
        direction = 'row'
        spacing ={3}
        p = {2}
        sx={{
          width: 300,
          height: 50,
          outlineColor: 'black',
          border: '2px solid #000000',
          borderRadius: '10px'
        }}>
        <Box
          sx={{
              justifyContent: 'center'
            }}>
          <Typography>
          Reactの勉強をする
          </Typography>
        </Box>
        <Button variant="outlined">Outlined</Button>
      </Stack>

    </div>
  ) 
}

export default App;
