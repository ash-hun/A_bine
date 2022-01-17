import React from 'react';
import './App.css';
import { BrowserRouter as RouteWrap, Route, Routes } from 'react-router-dom';
import Main from './Page/Main/Main';
import Welcomming from './Page/Welcomming/Welcomming';

function App() {
  return (
    <>
      <RouteWrap>
        <Routes>
          <Route path="/" element={<Welcomming/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </RouteWrap>
    </>
  );
}

export default App;
