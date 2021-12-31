

import React, { useState } from 'react';
import Header from './components/Home/Header';
import Lightbox from './components/Lightbox/Lightbox';

import TablePatient from './components/Home/TablePatient';




function App() {
  const [open, setOpen] = useState(false)


  return (
    <div className="App">

      <Header setOpen={setOpen} />
      <div className="table">
        <TablePatient />
      </div>
      <Lightbox open={open} setOpen={setOpen} />


    </div>
  );
}

export default App;
