import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button,Paper,Grid } from "@material-ui/core";

const API_KEY = "d90e8b4e";

class SearchForm extends Component {
  state = {
    inputMovie: "",
  };

  handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault()

    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((results) => {
        const { Search = []} = results;

        Promise.all(
          Search.map((search) =>
            fetch(
              `http://www.omdbapi.com/?apikey=${API_KEY}&i=${search.imdbID}`
            ).then((res) => res.json())
          )
        ).then((singleRes) => {
          this.props.onResults(singleRes);
        });
      });
  };

  render() {
    return (
        <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
              name="title"
              placeholder="Movie to Search ...."
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              onClick={this.handleSubmit}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}


export default SearchForm;
