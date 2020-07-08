import React from 'react';
import SettingsContext from './context/site.js';
import LoginContext from '../src/components/auth/context';
import ToDo from './components/todo/todo.js';
import Header from './components/header.js';
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import Signup from './components/auth/signup';

function App() {
  return (
    <>
        <Header />
      <LoginContext>
        <Login />
        <Signup />
        <hr />
       <Auth capability="read">
          <SettingsContext>
        
            <ToDo />
          </SettingsContext>
     
      </Auth>
      </LoginContext>
    </>
  )
}
export default App;