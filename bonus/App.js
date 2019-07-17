import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from 'arui-private/content';

import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Monitoring from './components/Monitoring/Monitoring.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Content theme="alfa-on-white">
          <Route exact path="/" component={Home} />
          <Route path="/monitoring" component={Monitoring} />
        </Content>
      </div>
    </Router>
  );
}

export default App;
