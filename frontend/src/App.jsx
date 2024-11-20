import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import WebSocketClient from './WebSocketClient';
import FieldMonitoring from './FieldMonitoring';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ws-client' element={<WebSocketClient />} />
        <Route path='/field-monitoring' element={<FieldMonitoring />} />
      </Routes>
    </Router>
  )
}

export default App;