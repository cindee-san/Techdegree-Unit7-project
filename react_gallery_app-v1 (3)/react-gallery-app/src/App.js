import React from 'react';
import{ Routes, NavLink } from 'react-router-dom';

//Stateless App Components
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import apiKey from './config';

//Stateful App Components
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';


const App = () => (
  <div>
    <SearchForm />
    <Nav /> 
    <PhotoContainer />
    <NotFound />
  </div>
);
  


export default App;
