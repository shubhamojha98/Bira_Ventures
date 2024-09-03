import React from 'react';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';

const App=createBrowserRouter( [
  {
    path:"/",
    element:<AppLayout/>
  }

]);

export default App;
