import React from 'react';
import { BlackButton, TextBox } from '/Users/sotamizukami/todo_app/front/src/index';
import * as CSS from 'csstype';

interface MakingPageProps {
  showFlag: boolean;
  setShowOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MakingPage: React.FC<MakingPageProps> = ({ showFlag, setShowOpenModal }) => {
  const textBoxStyle: React.CSSProperties = {
    width: '1030px',
    marginLeft: '20px',
    marginRight: '20px',
  };

  const closeMakingModal = () => {
    setShowOpenModal(false);
  };

  const overlay: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const modalContent: React.CSSProperties = {
    background: 'white',
    padding: '10px',
    borderRadius: '3px',
  };

  return (
    <>
      {showFlag ? (
        <div id="overlay" style={overlay}>
          <div id="modalContent" style={modalContent}>
            <div>
              <h2 style={textBoxStyle}>タイトル</h2>
              <TextBox style={textBoxStyle} row={1} />
              <h2 style={textBoxStyle}>詳細</h2>
              <TextBox style={textBoxStyle} row={4} />
            </div>
            <div style={{ display: 'flex', marginTop: '20px', marginLeft: '806px' }}>
              <BlackButton title="破棄" />
              <div style={{ marginLeft: '30px' }}>
                <BlackButton title="作成" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MakingPage;
