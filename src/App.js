import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Form.jsx';
import Form2 from './Form2.jsx';
function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path = '/' element = {<Form />} />
            <Route exact path = '/page2' element = {<Form2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
export default App;