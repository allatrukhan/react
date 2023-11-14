import * as React from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <div class="main-content">
        <Calendar/>
        <Main/>
      </div>
     
      
    </div>
  );
}

export default App;
