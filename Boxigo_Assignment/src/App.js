import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mymoves from './pages/Mymoves.tsx';
import MyProfile from './pages/MyProfile.tsx';
import GetQuote from './pages/GetQuote.tsx';
import LogOut from './pages/LogOut.tsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Mymoves} />
          <Route path='/myprofile' component={MyProfile} />
          <Route path='/getquotes' component={GetQuote} />
          <Route path='/logout' component={LogOut} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
