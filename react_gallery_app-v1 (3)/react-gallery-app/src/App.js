import React, { Component } from "react";
import { BrowserRouter,
         Route } from "react-router-dom";
import axios from 'axios';

//Stateless App Components
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import apiKey from "./config";

//Stateful App Components
import SearchForm from "./components/SearchForm";
import PhotoList from "./components/PhotoList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photo: []
    };
  }

componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beyonce&extras=url_c&per_page=24&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState({
        photo: response.data.photos.photo
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    console.log(this.state.photo);
    return (
      <BrowserRouter>
      <div>
        <SearchForm onSearch={this.performSearch}/>
        <Route component={Nav} />
      <div className="photo-container">
        <PhotoList data={this.state.photo}/>
      </div>
        <Route component={NotFound} />
      </div>
      </BrowserRouter>
    );
  }
  
}



  
