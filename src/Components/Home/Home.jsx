import React, { Component } from "react";
import MainContent from "./MainContent";
import ScrollToTop from "./ScrollToTop";
class Home extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };
  handleScroll = () => {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };
  render() {
    const { show } = this.state;
    return (
      <>
        <MainContent history={this.props.history} />
        {show && <ScrollToTop scrollToTop={this.scrollToTop} />}
      </>
    );
  }
}

export default Home;
