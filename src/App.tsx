import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import BaseLayout from './components/layout/BaseLayout';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  );
}

export default App;
