import React from 'react';
import { Box } from '@material-ui/core';
import { Title, Date, EditButton, Detail } from '/Users/sotamizukami/todo_app/front/src/index';

const DetailPage = () => {
  return (
    <Box>
      <Title title='reactを頑張る' />
      <Date year={2023} month={6} day={12} />
      <EditButton />
      <Detail detail='早めにしないといけない' />
    </Box>
  );
};

export default DetailPage;
