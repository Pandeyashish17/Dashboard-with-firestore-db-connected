import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Analytics from './pages/Analytics.jsx';
import Login from './pages/Login.jsx';
import DataBaseList from "./Front/DatabaseList"


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path="/" element={<DataBaseList />} />
        <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;