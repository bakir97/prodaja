import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
const style = {
  searchBar: {
    maxWidth: 400,
    margin: 10,
    marginTop: 0,
    width: "100%"
  }
};
export default class SearchBarComponent extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <SearchBar
        onCancelSearch={() => this.setState({ search: "" })}
        value={this.state.search}
        onChange={e => this.setState({ search: e })}
        onRequestSearch={() => this.props.search(this.state.search)}
        style={style.searchBar}
      />
    );
  }
}
