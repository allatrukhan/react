import * as React from 'react';
import Button from '@mui/material/Button';
import {useState} from 'react';

import './App.css';
import FileManager from './FileManager/FileManager';

function App() {

  const [isOpen, setIsOpen] = useState(false);
    
    const openModal=()=>{
        setIsOpen(true);
    };
    
    const closeModal=()=>{
      setIsOpen(false);
    };


  return (
    <div className="App">
        <Button variant="contained" disableElevation onClick={openModal}>
          Open File Manager
        </Button>
      {(isOpen)&&<FileManager closeModal={closeModal}/>}
    </div>
  );
}

export default App;
