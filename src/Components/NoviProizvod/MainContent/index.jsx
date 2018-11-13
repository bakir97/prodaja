import React, { Component } from "react";
import MainContentLayout from "./MainContentLayout";

export class MainContent extends Component {
  state = {
    slike: [],
    oldPictures: []
  };
  componentDidUpdate() {
    if (
      Object.keys(this.props.newProizvodState).length > 0 &&
      this.state.slike.length > 0
    ) {
      this.setState({ slike: [] });
    }
    if (
      !this.props.match.params.id &&
      Object.keys(this.props.proizvod).length > 0
    ) {
      this.props.proizvodToRedux({});
      this.setState({ slike: [], oldPictures: [] });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.proizvod !== nextProps.proizvod &&
      Object.keys(nextProps.proizvod).length > 0
    ) {
      this.setState({ oldPictures: nextProps.proizvod.slike });
    }
  }
  drop = files => {
    this.setState(prevState => ({
      slike: [...prevState.slike, ...files]
    }));
  };
  obrisi = id => {
    this.setState(prevState => ({
      slike: prevState.slike.filter(slika => slika.preview !== id)
    }));
  };
  obrisiOldPictures = id => {
    this.setState(prevState => ({
      oldPictures: prevState.oldPictures.filter(
        oldPictures => oldPictures !== id
      )
    }));
  };
  render() {
    return (
      <MainContentLayout
        {...this.props}
        {...this.state}
        drop={this.drop}
        obrisi={this.obrisi}
        obrisiOldPictures={this.obrisiOldPictures}
      />
    );
  }
}
export default MainContent;
