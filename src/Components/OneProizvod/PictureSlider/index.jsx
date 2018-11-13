import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LightBox from "../LightBox";
import sliderStyle from "./sliderStyle";
const styles = theme => sliderStyle(theme);

class TextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    open: false
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };
  handleOpenLightBox = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, pictures } = this.props;
    const { activeStep, open } = this.state;
    const maxSteps = pictures.length;

    return (
      <>
        <div className={classes.root}>
          <img
            onClick={() => this.setState({ open: true })}
            className={classes.img}
            src={this.props.pictures[activeStep]}
            alt=""
          />
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button
                size="small"
                onClick={this.handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </div>
        <LightBox
          number={activeStep}
          pictures={pictures}
          open={open}
          handleOpen={this.handleOpenLightBox}
        />
      </>
    );
  }
}
export default withStyles(styles, { withTheme: true })(TextMobileStepper);
