import React, { Component } from "react";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import Movie from "./components/Movie";
import Details from "./components/Details";
import SimpleAlert from "./components/Alert";
import Footer from "./components/Footer";


export class App extends Component {
  state = {
    usedSearch: false,
    results: [],
  };

  handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  renderResults() {
    return this.state.results.length === 0 ? (
      <SimpleAlert severity="error"/>
    ) : (
      <Movie movies={this.state.results} />
    );
  }

  render() {
    return (
      <React.Fragment>
      <Title> Movie Searcher</Title>
        <Details></Details>
        
        <div>
          <SearchForm onResults={this.handleResults}></SearchForm>
        </div>
      
        {this.state.usedSearch ? (
          this.renderResults()
        ) : (
          <big>Use the form to search a movie</big>
        )}

        <Footer />
      </React.Fragment>
        
      
    );
  }
}

export default App;
