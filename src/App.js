import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import Form from './Form.jsx';
import FormMobile from './FormMobile.jsx';
import TableHTML from './tables/detailTable/TableHTML.jsx';
function App({ props }) {
  const hooks = {
    useSelector: useSelector,
    dispatch: useDispatch()
  }
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path = '/' element = { <Form progress = {true} progressLang = {true} hooks = {hooks} />} />
            <Route exact path = '/m' element = {<FormMobile />} />
            <Route exact path = '/detail' element = {<TableHTML />} />

          </Routes>
        </div>
      </BrowserRouter>
    );
  }
export default App;