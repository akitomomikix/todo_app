import React from 'react'  // rafce
import {Box} from '@mui/material';
import {WhiteButton} from '/Users/sotamizukami/todo_app/front/src/index';

const EditButton = () => {
  return (
    <div>
        <Box sx={{ marginLeft: 'auto', marginRight: '10px' }}>
            <WhiteButton title="編集" children = '' />
        </Box>
    </div>
  )
}

export default EditButton