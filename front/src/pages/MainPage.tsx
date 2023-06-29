import React, { useState } from 'react';
import MakingPage from './MakingPage';
import {AddButton, TodoTextBox} from '/Users/sotamizukami/todo_app/front/src/index';

const MainPage = () => {

  const textBoxStyle = {
    width: '1030px',
    marginLeft: '20px',
    marginRight: '20px',
  };

  const [showOpenModal, setShowOpenModal] = useState(false);

  const showOpenModalHandler = () => {
    setShowOpenModal(true);
  };

  return (
    <>
      <div>
        <h1 style={textBoxStyle}>ToDoアプリ</h1>
        <AddButton onClick={showOpenModalHandler}>追加</AddButton>
      </div>
      <TodoTextBox content='勉強'/>
      <MakingPage showFlag={showOpenModal} setShowOpenModal={showOpenModalHandler} />
    </>
  );
};

export default MainPage;
