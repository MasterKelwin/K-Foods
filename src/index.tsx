import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button/button'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Button> Teste </Button>
  </React.StrictMode>
);
