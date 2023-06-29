import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/MainPage';
import MakingPage from './pages/MakingPage';
import DetailPage from './pages/DetailPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   {/* <App /> */}
  <MainPage/>
  <DetailPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {default as WhiteButton} from './components/WhiteButton'
export {default as BlackButton} from './components/BlackButton'
export {default as TextBox} from './components/TextBox'
export {default as TodoTextBox} from './components/TodoTextBox'
export {default as AddButton} from './components/AddButton'
export {default as EditButton} from './components/EditButton'
export {default as Title} from './components/Title'
export {default as Date} from './components/Date'
export {default as Detail} from './components/Detail'