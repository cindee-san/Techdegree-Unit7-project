import React from 'react';

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
