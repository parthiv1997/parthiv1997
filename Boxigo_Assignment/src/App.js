import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mymoves from './pages/Mymoves.tsx';
import MyProfile from './pages/MyProfile';
import Get_Quotes from './pages/Get_Quotes';
import Log_out from './pages/Log_out';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Mymoves} />
          <Route path='/profile' component={MyProfile} />
          <Route path='/get_quotes' component={Get_Quotes} />
           <Route path='/logout' component={Log_Out} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
