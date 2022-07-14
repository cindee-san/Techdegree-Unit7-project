import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //return Switch here
import axios from "axios";

//Stateless App Components
import apiKey from "./config";
import NotFound from "./components/NotFound";
import PhotoList from "./components/PhotoList";

//Stateful App Components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photo: [],
      fries: [],
      iguanas: [],
      beaches: [],
      query: "",
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch();
    this.performSearch("iguanas");
    this.performSearch("fries");
    this.performSearch("beaches");
  }

  performSearch = (query = "nebula") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_c&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "iguanas") {
          this.setState({ iguanas: response.data.photos.photo });
        } else if (query === "fries") {
          this.setState({ fries: response.data.photos.photo });
        } else if (query === "beaches") {
          this.setState({ beaches: response.data.photos.photo });
        } else {
          this.setState({ photo: response.data.photos.photo });
        }
        this.setState({
          query: query,
          loading: false
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    console.log(this.state.photo);
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            {/*Search form*/}
            <SearchForm onSearch={this.performSearch} />
            
            {/*/Nav*/}
            <Nav onClick={this.performSearch} />

            {/*/ home page*/}
            <Switch>
            <Route
                exact path="/"
                render={() => (
                  <div className="photo-container">
                  <h2>{`${this.state.query} Photos`}</h2>
                    <PhotoList data={this.state.photo} />
                  </div>
                )}
              />
              {/* //  <Route
                path="/:query"
                render={() => (
                  <div className="photo-container">
                    <PhotoList data={this.state.photo} />
                  </div>
                )}
              /> */}
              {/* Nav Routing */}
              <Route
                exact path="/fries"
                render={() => (
                  <PhotoList
                    data={this.state.fries}
                    loading={this.state.loading}
                    topic={"fries"}
                  />
                )}
              />
              <Route
                exact path="/iguanas"
                render={() => (
                  <PhotoList
                    data={this.state.iguanas}
                    loading={this.state.loading}
                    topic={"iguanas"}
                  />
                )}
              />
              <Route
                exact path="/beaches"
                render={() => (
                  <PhotoList
                    data={this.state.beaches}
                    loading={this.state.loading}
                    topic={"beaches"}
                  />
                )}
              />
              {/*/ not found*/}
              <Route path="/NotFound" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
