import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login.js';
import LogoutButton from './components/logout.js';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientID = "1082372328759-mlb32jb60ceu3rbcjtqiu0jgoh5fbubr.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clienId: clientID,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  })


  return (
    <div className="App">
    <LoginButton/>
    <LogoutButton/>
    </div>
  );
}

export default App;
