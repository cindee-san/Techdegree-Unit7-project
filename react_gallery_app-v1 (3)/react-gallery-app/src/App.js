import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; //return Switch here
import axios from "axios";

//Stateless App Components
import Nav from "./components/Nav";
import apiKey from "./config";

//Stateful App Components
import SearchForm from "./components/SearchForm";
import PhotoList from "./components/PhotoList";
import NotFound from "./components/NotFound";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photo: [],
      query: '', 
      loading: 'Loading...'
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "nebulas") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_c&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photo: response.data.photos.photo,
          query: query,
          loading: 'Loading...'
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    console.log(this.state.photo);
    return (
      <BrowserRouter>
        <div>
          {/*/ home page*/}
          <SearchForm onSearch={this.performSearch }/>
          {/* Nav to default topics */}
          <Nav onClick={this.performSearch}/>
          {/*/ This also routes, but doesn't show the h2 tags*/}
          {/* <Route path='/search/:keyword' render={() => <PhotoList data={this.state.photo} loading={this.state.loading}/>}/> */}
          
          {/*photo results display*/}
          <div className="photo-container">
            <h2>{`${this.state.query} Photos`}</h2>
            <PhotoList data={this.state.photo} />
          </div>
          {/*/ not found*/}
          <Route path="/NotFound" component={NotFound} />
          {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}
