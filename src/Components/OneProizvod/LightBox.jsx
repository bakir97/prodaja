import React from "react";
import Lightbox from "react-images";

export default class Sample extends React.Component {
  state = {
    number: this.props.number
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ number: nextProps.number });
  }
  gotoPrevious = () => {
    this.setState(prevState => ({ number: prevState.number - 1 }));
  };
  gotoNext = () => {
    this.setState(prevState => ({ number: prevState.number + 1 }));
  };
  render() {
    const { pictures, open, handleOpen } = this.props;
    const { number } = this.state;
    return (
      <Lightbox
        currentImage={number}
        images={pictures.map(picture => {
          return { src: picture };
        })}
        isOpen={open}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={() => handleOpen()}
      />
    );
  }
}
