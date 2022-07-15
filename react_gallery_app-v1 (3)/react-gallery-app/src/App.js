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
      iguana: [],
      beaches: [],
      query: "",
      loading: true,
    };
  }
//loads default topics and home page data
  componentDidMount() {
    this.performSearch();
    this.performSearch("iguana");
    this.performSearch("fries");
    this.performSearch("beaches");
  }

  //sends fetch request for data and stores into arrays
  performSearch = (query = "nebula") => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_c&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "iguana") {
          this.setState({ iguana: response.data.photos.photo });
        } else if (query === "fries") {
          this.setState({ fries: response.data.photos.photo });
        } else if (query === "beaches") {
          this.setState({ beaches: response.data.photos.photo });
        } else{
          this.setState({ query: query})
          this.setState({ photo: response.data.photos.photo });
        }
        this.setState({
          loading: false,
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
                exact
                path="/"
                render={() => (
                  <div className="photo-container">
                    <PhotoList data={this.state.photo} 
                    topic={"nebulas"}
                    />
                  </div>
                )}
              />
              {/* Nav Routing */}
              <Route
                exact
                path="/fries"
                render={() => (
                  <PhotoList
                    data={this.state.fries}
                    loading={this.state.loading}
                    topic={"fries"}
                  />
                )}
              />
              <Route
                exact
                path="/iguana"
                render={() => (
                  <PhotoList
                    data={this.state.iguana}
                    loading={this.state.loading}
                    topic={"iguana"}
                  />
                )}
              />
              <Route
                exact
                path="/beaches"
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

              {/* search results*/}
              <Route
                path="/:query"
                render={() => (
                  <div className="photo-container">
                    <PhotoList data={this.state.photo} 
                      topic={this.state.query}
                    />

                  </div>
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
